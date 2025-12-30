import express from "express";
import connectToDB from "./db/connect.js";

import productRouter from "./routes/productRouter.js";
import authRouter from "./routes/Auth.js";
import adminRouter from "./routes/Admin.js";
import checkRouter from "./routes/Check.js";
import cartRouter from "./routes/cart.js";

import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

/* ================= MIDDLEWARE ================= */
app.use(express.json());
app.use(cookieParser());

/* ================= DATABASE ================= */
await connectToDB();

/* ================= CORS CONFIG ================= */
const allowedOrigins = [
  "http://localhost:5173",                 // local frontend
  "https://new-ecommerce-t48z.onrender.com" // render frontend
];

app.use(
  cors({
    origin: function (origin, callback) {
      // postman / server-to-server request
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

/* ================= ROUTES ================= */
app.use("/product", productRouter);
app.use("/user", authRouter);
app.use("/admin", adminRouter);
app.use("/check", checkRouter);
app.use("/cart", cartRouter);
app.use("/uploads", express.static("uploads"));

/* ================= SERVER ================= */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
