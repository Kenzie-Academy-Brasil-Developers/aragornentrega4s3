import "express-async-errors";
import express from "express";
import "dotenv/config";
import { routesglobal } from "./routers/index.js";
import { errorHandler } from "./errors/index.js";

const app = express();

app.use(express.json());
app.use(routesglobal);
app.use(errorHandler);

export default app;
