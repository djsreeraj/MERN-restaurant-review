import express from "express";
import cors from "cors";
import restaurants from "./api/restaurants.route.js";

const app = express();

//middlewares
app.use(cors());
app.use(express.json()); //used instead of bodyparser

app.use("/api/v1/restaurants", restaurants);

//wildcard for other entries
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

export default app;
