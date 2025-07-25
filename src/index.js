import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import auth from "./lib/auth.js";

dotenv.config();

//init  the express thru app
const app = express();

app.all("/api/auth/{*any}", toNodeHandler(auth));

//middlewares
app.use(
  cors({
    origin: process.env.CLIENT_URL, // Replace with your frontend's origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);
app.use(express.json());

//import all the routes here
import healthRoute from "./routes/health.route.js";
import homeRoute from "./routes/home.route.js";
import usersRoute from "./routes/users/users.route.js";

//the modularised routes - api convention
app.use("/api", healthRoute);
app.use("/", homeRoute);

//
app.use("/api/users", usersRoute);

//port from env & fallback port
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
