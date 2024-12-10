import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from 'dotenv';
import { conectDB } from "./config/bd.js";

import authRoutes from './routes/auth.routes.js'
import autoRoutes from "./routes/auto.routes.js";

dotenv.config();
const app = express()
conectDB();

app.use(cors({
    origin: "*",
    credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", autoRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

export default app;
