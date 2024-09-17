import express from "express";

import "./config/mongoConnection.js";
import authRoutes from "./routes/authRoute.js";
import { createError } from "./utility/cusomError.js";

const app = express();

app.use(authRoutes);

app.get("/", (req, resp) => {
  resp.send("ok");
});

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
