let express = require("express");
let router =  express.Router();
//let categoryController = require("./../Controller/category.controller");
//let productController = require("./../Controller/product.controller");
let categoriesRoute = require("./categories.route");
let productsRoute = require("./products.route");



router.get("/", (req,res,next) => {
    res.write("This is the base page");
    res.end();
    });


router.use("/categories",categoriesRoute);
router.use("/products",productsRoute);



module.exports = router;

