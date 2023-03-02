import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import router from "./routers/router.js";

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/", router);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
