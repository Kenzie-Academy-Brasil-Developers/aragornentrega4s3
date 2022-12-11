import { Router } from "express";
import { categoriesControllers } from "../controller/categories";
import { categoriesMiddlewaresVerifyBody, categoriesMiddlewaresVerifyID } from "../middlewares/categories";
import { serializerCategory } from "../serializers/categories";

export const categoriesRouter = Router();

categoriesRouter.get("/", categoriesControllers.index);

categoriesRouter.post("/",  categoriesMiddlewaresVerifyBody(serializerCategory.create) ,categoriesControllers.create);

categoriesRouter.get("/:id", categoriesMiddlewaresVerifyID(serializerCategory.readId), categoriesControllers.read);

categoriesRouter.patch("/:id", categoriesMiddlewaresVerifyID(serializerCategory.readId), categoriesMiddlewaresVerifyBody(serializerCategory.create), categoriesControllers.update);

categoriesRouter.delete("/:id", categoriesMiddlewaresVerifyID(serializerCategory.readId), categoriesControllers.delete);
