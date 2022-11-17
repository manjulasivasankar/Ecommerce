let express = require("express");
let categoryRouter = express.Router();
let categoryController = require("./../Controller/category.controller");

categoryRouter.get("/", categoryController.getAllCategories);

categoryRouter.get("/:categoryId", categoryController.getCategoryById );

categoryRouter.post("/", categoryController.addNewCategory);

categoryRouter.post("/:categoryId", categoryController.deleteCategoryById);

module.exports = categoryRouter;