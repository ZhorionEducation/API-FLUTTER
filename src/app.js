const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

const { swaggerDocument } = require("./docs/swagger");

const app = express();

app.use(cors());
app.use(express.json());

app.get(["/api-docs", "/api-docs/"], (_req, res) => {
    res.type("html").send(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>API de Productos</title>
  <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@5/swagger-ui.css">
</head>
<body>
  <div id="swagger-ui"></div>
  <script src="https://unpkg.com/swagger-ui-dist@5/swagger-ui-bundle.js"></script>
  <script>
    window.onload = () => SwaggerUIBundle({
      spec: ${JSON.stringify(swaggerDocument)},
      dom_id: "#swagger-ui"
    });
  </script>
</body>
</html>`);
});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

module.exports = app;