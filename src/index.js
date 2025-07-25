import { toNodeHandler } from "better-auth/node";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { auth } from "./lib/auth.js";

dotenv.config();

//init  the express thru app
const app = express();


//middlewares
app.use(cors());
app.use(express.json());

app.all("/auth/*splat", toNodeHandler(auth));
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
