const mysql = require("mysql2/promise");
const fs = require("fs");
const path = require("path");

const caPath = process.env.DB_SSL_CA_PATH
    ? path.resolve(__dirname, "../..", process.env.DB_SSL_CA_PATH)
    : null;
const ca = process.env.DB_SSL_CA
    ? process.env.DB_SSL_CA.replace(/\\n/g, "\n")
    : caPath
        ? fs.readFileSync(caPath)
        : undefined;

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
        ca,
        rejectUnauthorized: true,
    },
});

module.exports = pool;