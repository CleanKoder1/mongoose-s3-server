const { S3Client } = require("@aws-sdk/client-s3");
const {
  bucketRegion: region,
  accessKey: accessKeyId,
  secretKey: secretAccessKey,
} = require("../config");

const s3Client = new S3Client({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

module.exports = {
  s3Client,
};
