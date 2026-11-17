const swaggerUi = require("swagger-ui-express");

const swaggerDocument = {
    openapi: "3.0.0",
    info: {
        title: "API de Productos",
        version: "1.0.0",
        description: "API para la gestión de productos",
    },
    servers: [
        {
            url: process.env.API_URL || "http://localhost:5000",
            description: "Servidor",
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT",
            },
        },
    },
    paths: {
        "/api/auth/login": {
            post: {
                summary: "Iniciar sesión",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    email: {
                                        type: "string",
                                        example: "admin@admin.com",
                                    },
                                    password: {
                                        type: "string",
                                        example: "12345",
                                    },
                                },
                                required: ["email", "password"],
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: "Inicio de sesión exitoso",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        token: {
                                            type: "string",
                                            example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    400: {
                        description: "Error de validación",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: {
                                            type: "string",
                                            example: "Contraseña y email son requeridos",
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        "/api/products": {
            get: {
                tags: ["Productos"],
                summary: "Obtener todos los productos",
                responses: {
                    200: {
                        description: "Lista de productos",
                    },
                    400: {
                        description: "Error al obtener productos",
                    },
                },
            },
            post: {
                tags: ["Productos"],
                summary: "Crear un nuevo producto",
                security: [
                    {
                        bearerAuth: [],
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    sku: { type: "string", example: "12345" },
                                    nombre: { type: "string", example: "Producto A" },
                                    categoria: { type: "string", example: "Categoría 1" },
                                    proveedor: { type: "string", example: "Proveedor X" },
                                    stock: { type: "integer", example: 100 },
                                    costounitario: { type: "number", example: 10.5 },
                                    precioventa: { type: "number", example: 15.0 },
                                    unidadmedida: { type: "string", example: "unidad" },
                                    estado: { type: "string", example: "activo" },
                                    observaciones: { type: "string", example: "Observaciones del producto" },
                                },
                                required: ["sku", "nombre", "categoria", "proveedor", "stock", "costounitario", "precioventa", "unidadmedida", "estado"],
                            },
                        },
                    },
                },
                responses: {
                    201: {
                        description: "Producto creado exitosamente",
                    },
                    400: {
                        description: "Error al crear producto",
                    },
                },
            },

            put: {
                tags: ["Productos"],
                summary: "Actualizar un producto existente",
                security: [
                    {
                        bearerAuth: [],
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    sku: { type: "string", example: "12345" },
                                    nombre: { type: "string", example: "Producto A" },
                                    categoria: { type: "string", example: "Categoría 1" },
                                    proveedor: { type: "string", example: "Proveedor X" },
                                    stock: { type: "integer", example: 100 },
                                    costounitario: { type: "number", example: 10.5 },
                                    precioventa: { type: "number", example: 15.0 },
                                    unidadmedida: { type: "string", example: "unidad" },
                                    estado: { type: "string", example: "activo" },
                                    observaciones: { type: "string", example: "Observaciones del producto" },
                                },
                                required: ["sku", "nombre", "categoria", "proveedor", "stock", "costounitario", "precioventa", "unidadmedida", "estado"],
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: "Producto actualizado exitosamente",
                    },
                    400: {
                        description: "Error al actualizar producto",
                    },
                },
            },
            delete: {
                tags: ["Productos"],
                summary: "Eliminar un producto existente",
                security: [
                    {
                        bearerAuth: [],
                    },
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    sku: {
                                        type: "string",
                                        example: "12345",
                                    },
                                },
                                required: ["sku"],
                            },
                        },
                    },
                },
                responses: {
                    200: {
                        description: "Producto eliminado exitosamente",
                    },
                    400: {
                        description: "Error al eliminar producto",
                    },
                },
            },
        },
    },
};

module.exports = {
    swaggerUi,
    swaggerDocument,
};