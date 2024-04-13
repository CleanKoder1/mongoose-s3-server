const { productServices } = require("../services");

const getAllProducts = async (req, res, next) => {
  try {
    const products = await productServices.getAll();

    res.status(200).json({
      success: true,
      message: "Successfully retrieved all products",
      data: {
        products,
      },
    });
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productServices.getById(id);

    res.status(200).json({
      success: true,
      message: "Successfully retrieved the product",
      data: {
        product,
      },
    });
  } catch (error) {
    next(error);
  }
};

const postProduct = async (req, res, next) => {
  try {
    const { body, file } = req;
    const product = await productServices.create(body, file);

    res.status(200).json({
      success: true,
      message: "Product was successfully created",
      data: {
        product,
      },
    });
  } catch (error) {
    next(error);
  }
};

const patchProductById = async (req, res, next) => {
  try {
    const {
      params: { id },
      body,
      file,
    } = req;
    const product = await productServices.updateById(id, body, file);

    res.status(200).json({
      success: true,
      message: "Product was successfully updated",
      data: {
        product,
      },
    });
  } catch (error) {
    next(error);
  }
};

const deleteProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productServices.deleteById(id);

    res.status(200).json({
      success: true,
      message: "Product was successfully removed",
      data: {
        product,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  deleteProductById,
  getAllProducts,
  getProductById,
  patchProductById,
  postProduct,
};
