import { Router } from "express";
import { productsControllers } from "../controller/products";
import { categoriesMiddlewaresVerifyID } from "../middlewares/categories";
import { productsMiddlewaresVerifyBody, productsMiddlewaresVerifyID } from "../middlewares/products";
import { serializerCategory } from "../serializers/categories";
import { serializerProduct } from "../serializers/products";

export const productsRouter = Router();

productsRouter.get("/", productsControllers.index);

productsRouter.post("/", productsMiddlewaresVerifyBody(serializerProduct.create), productsControllers.create);

productsRouter.get("/:id", productsMiddlewaresVerifyID(serializerProduct.readId), productsControllers.read);

productsRouter.patch("/:id", productsMiddlewaresVerifyID(serializerProduct.readId), productsMiddlewaresVerifyBody(serializerProduct.update), productsControllers.update);

productsRouter.delete("/:id", productsMiddlewaresVerifyID(serializerProduct.readId), productsControllers.delete);

productsRouter.get("/category/:id", categoriesMiddlewaresVerifyID(serializerCategory.readId), productsControllers.joinCategory);
