const repository = require("../repositories/productRepository");

const getAllProducts = async () => {
    return await repository.getAllProducts();
}

const createProduct = async (sku, nombre, categoria, proveedor, stock, costounitario, precioventa, unidadmedida, estado, observaciones) => {
    return await repository.createProduct(sku, nombre, categoria, proveedor, stock, costounitario, precioventa, unidadmedida, estado, observaciones);
}

const updateProduct = async (sku, nombre, categoria, proveedor, stock, costounitario, precioventa, unidadmedida, estado, observaciones) => {
    return await repository.updateProduct(sku, nombre, categoria, proveedor, stock, costounitario, precioventa, unidadmedida, estado, observaciones);
}

const deleteProduct = async (sku) => {
    return await repository.deleteProduct(sku);
}

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
};