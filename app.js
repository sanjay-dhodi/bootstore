import express from "express";
import "./config/mongoConnection.js";
import bodyParser from "body-parser";

import authRoutes from "./routes/authRoute.js";
import productRoutes from "./routes/productRoute.js";

const app = express();

// middleweres
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes init
app.use("/api/auth/", authRoutes);
app.use("/api/products/", productRoutes);

app.get("/", (req, resp) => {
  resp.send("ok");
});

// error handler

app.use((req, resp, next) => {
  resp.json("page not found");
});

app.use((err, req, resp, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "something wrong";

  resp.status(errorStatus).json({
    success: "false",
    status: errorStatus,
    message: errorMessage,
  });
});

app.listen(3000, console.log("app stated on port 3000"));
