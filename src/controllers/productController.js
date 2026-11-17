const service = require("../services/productService");

// consultar todos los productos
const getAllProducts = async (req, res) => {
    try {
        const products = await service.getAllProducts();
        res.status(200).json(products);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// crear un nuevo producto
const createProduct = async (req, res) => {
    try {
        const { sku, nombre, categoria, proveedor, stock, costounitario, precioventa, unidadmedida, estado, observaciones } = req.body;
        const result = await service.createProduct(sku, nombre, categoria, proveedor, stock, costounitario, precioventa, unidadmedida, estado, observaciones);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// actualizar un producto existente
const updateProduct = async (req, res) => {
    try {
        const { sku, nombre, categoria, proveedor, stock, costounitario, precioventa, unidadmedida, estado, observaciones } = req.body;
        const productSku = req.params.sku || sku;
        const result = await service.updateProduct(productSku, nombre, categoria, proveedor, stock, costounitario, precioventa, unidadmedida, estado, observaciones);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// eliminar un producto existente
const deleteProduct = async (req, res) => {
    try {
        const sku = req.params.sku || (req.body && req.body.sku);
        if (!sku) {
            return res.status(400).json({ message: "El SKU es requerido" });
        }
        const result = await service.deleteProduct(sku);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
};