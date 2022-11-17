let categoryModel = require("./../Model/Category")
let sequelizeInstance = require("./../config/db.config");



let createTable = async () => {
    await sequelizeInstance.sync({force: true});
    insertCategories();
    console.log("Table created successfully")
}

let insertCategories = async () => {
    await categoryModel.bulkCreate([
        {
            name : "Fashion"
        },
        {
            name : "Mobile"
        },
        {
            name : "Electronics"
        },
        {
            name : "Appliances"
        }
    ])
    {
        timestamp:false
    }
}

let getAllCategories = async (req,res,next) => {
    let categories = await categoryModel.findAll();
    res.writeHead(200, {'content-Type':'application/json'});
    res.write(JSON.stringify(categories));
    res.end();
     
}
let getCategoryById = async (req,res,next) => {
    let id = req.params.categoryId;
    if(!id) {res.status(400).send("ID not passed")};
    let categories = await categoryModel.findAll({
        where: {
            id:id
        }
    });
    res.writeHead(200,{'content-Type' : 'application/json'} );
    res.write(JSON.stringify(categories));
    res.end();
 }
 
let addNewCategory = async(req, res, next) => {
    let categoryToAdd = req.body.name;
    await categoryModel.create({
        name : categoryToAdd
    });
    res.status(201).send("Data Added");
    res.end();
}

let  deleteCategoryById = async(req, res, next) => {
    let  id = req.params.categoryId;
    await categoryModel.destroy({
         where:{
            id : id
         }
    });
    res.status(200).send("category is deleted");
    res.end();
}







// createTable();


module.exports = {  
                    getAllCategories,
                    getCategoryById,
                    addNewCategory,
                    deleteCategoryById 
                    
                }