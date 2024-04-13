const {
  PutObjectCommand,
  DeleteObjectCommand,
  GetObjectCommand,
} = require("@aws-sdk/client-s3");
const { bucketName } = require("../config");
const { Product } = require("../models");
const { getRandomImageName } = require("../utils");
const { s3Client } = require("../lib/s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

async function getAll() {
  let products = await Product.find({});
  if (products) {
    for (const product of products) {
      const params = {
        Bucket: bucketName,
        Key: product.imageKey,
        ACL: "private",
      };
      const command = new GetObjectCommand(params);
      const url = await getSignedUrl(s3Client, command, {
        expiresIn: 50000,
      });

      product.imageKey = url;
    }
  }
  return products;
}

async function getById(id) {
  let product = await Product.findById(id);
  const params = {
    Bucket: bucketName,
    Key: product.imageKey,
    ACL: "private",
  };
  const command = new GetObjectCommand(params);
  const url = await getSignedUrl(s3Client, command, {
    expiresIn: 50000,
  });

  product.imageKey = url;
  return product;
}

async function create(body, file = null) {
  const imageName = getRandomImageName();
  const params = {
    Bucket: bucketName,
    Key: imageName,
    Body: file.buffer,
    ContentType: file.mimetype,
  };
  const command = new PutObjectCommand(params);
  await s3Client.send(command);

  body.imageKey = imageName;
  return Product.create(body);
}

async function updateById(id, body, file = null) {
  if (file && file.fieldname === "imageKey") {
    //
    const imageName = getRandomImageName();
    const params = {
      Bucket: bucketName,
      Key: imageName,
      Body: file.buffer,
      ContentType: file.mimetype,
    };
    const command = new PutObjectCommand(params);
    await s3Client.send(command);

    body.imageKey = imageName;
  }
  return Product.findByIdAndUpdate(id, body);
}

async function deleteById(id) {
  const product = await Product.findById(id);
  const params = {
    Bucket: bucketName,
    Key: product.imageKey,
  };
  const command = new DeleteObjectCommand(params);
  await s3Client.send(command);

  return Product.findByIdAndDelete(id);
}

module.exports = {
  create,
  deleteById,
  getAll,
  getById,
  updateById,
};
