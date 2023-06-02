import express from "express";
import { config } from "dotenv";
import conectarDB from "./config/db.js";
import especialistaRouter from "./routes/especialistaRouter.js";

const app = express();

config();
conectarDB();

app.use(express.json());
app.use("/api/especialista", especialistaRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server ejecutandose en http://localhost:${PORT}`);
});
