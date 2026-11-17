const db = require("../config/db");

const getAllProducts = async () => {
    const [rows] = await db.execute("SELECT * FROM products");
    return rows;
}

const createProduct = async (sku, nombre, categoria, proveedor, stock, costounitario, precioventa, unidadmedida, estado, observaciones) => {
    const [result] = await db.execute(
        "INSERT INTO products (sku, nombre, categoria, proveedor, stock, costounitario, precioventa, unidadmedida, estado, observaciones) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [sku, nombre, categoria, proveedor, stock, costounitario, precioventa, unidadmedida, estado, observaciones]
    );
    return { id: result.insertId, sku, nombre, categoria, proveedor, stock, costounitario, precioventa, unidadmedida, estado, observaciones };
}

const updateProduct = async (sku, nombre, categoria, proveedor, stock, costounitario, precioventa, unidadmedida, estado, observaciones) => {
    const [result] = await db.execute(
        "UPDATE products SET nombre = ?, categoria = ?, proveedor = ?, stock = ?, costounitario = ?, precioventa = ?, unidadmedida = ?, estado = ?, observaciones = ? WHERE sku = ?",
        [nombre, categoria, proveedor, stock, costounitario, precioventa, unidadmedida, estado, observaciones, sku]
    );
    return { sku, nombre, categoria, proveedor, stock, costounitario, precioventa, unidadmedida, estado, observaciones };
}

const deleteProduct = async (sku) => {
    const [result] = await db.execute("DELETE FROM products WHERE sku = ?", [sku]);
    return { message: `Producto con SKU ${sku} eliminado exitosamente` };
}


module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
};