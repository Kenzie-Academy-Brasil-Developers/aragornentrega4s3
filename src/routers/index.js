import { Router } from "express";
import { categoriesRouter } from "./categories.router.js";
import { productsRouter } from "./products.router.js";

export const routesglobal = Router();

routesglobal.use("/categories", categoriesRouter);

routesglobal.use('/products', productsRouter)


