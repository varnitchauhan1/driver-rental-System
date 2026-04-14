import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import { config } from "./config.js";

import authRoutes from "./routes/auth.js";
import clientRoutes from "./routes/client.js";
import driverRoutes from "./routes/driver.js";
import adminRoutes from "./routes/admin.js";
import paymentRoutes from "./routes/payments.js";
import supportRoutes from "./routes/support.js";

const app = express();
// app.use(cors({ origin: ['http://localhost:5173','http://localhost:5174'], credentials:true }))
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://driver-rental-admin-frontend.vercel.app",
      "https://driver-rental-frontend.vercel.app",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) =>
  res.json({ ok: true, service: "Driver Rental API" })
);

app.use("/auth", authRoutes);
app.use("/client", clientRoutes);
app.use("/driver", driverRoutes);
app.use("/admin", adminRoutes);
app.use("/payments", paymentRoutes);
app.use("/support", supportRoutes);

mongoose
  .connect(config.mongoUri)
  .then(() => {
    // app.listen(config.port, ()=> console.log('API running on http://localhost:'+config.port))
    app.listen(config.port, () => console.log("MongoDB connection success"));
  })
  .catch((err) => {
    console.error("Mongo connection error", err);
    process.exit(1);
  });
