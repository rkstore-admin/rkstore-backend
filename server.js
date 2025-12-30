const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/auth");
const storeRoutes = require("./routes/store");
const productRoutes = require("./routes/product");
const purchaseRoutes = require("./routes/purchase");
const pluginRoutes = require("./routes/plugin");

const app = express();

/* Middlewares */
app.use(cors());
app.use(express.json());

/* DB */
connectDB();

/* Routes */
app.use("/api", authRoutes);
app.use("/api/store", storeRoutes);
app.use("/api/product", productRoutes);
app.use("/api/purchase", purchaseRoutes);
app.use("/api/plugin", pluginRoutes);

/* Root */
app.get("/", (req, res) => {
  res.send("RKStore API Running");
});

/* Start */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
