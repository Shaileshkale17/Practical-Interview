import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { connectDB } from "./config/db.js";
import beneficiaryRoutes from "./routes/beneficiaryRoutes.js";

const app = express();
const PORT = 8080;

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/beneficiaries", beneficiaryRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
