// const {Category,Product,sequelize} = require('./models');
const {Category,Product,sequelize} = require('./models')

sequelize.sync({force:true}).then(async () =>{
    console.log("Database synced :))------------------------------------------------------------------------------- ");


    // create a category and some products
    const category = await Category.create({name:"Electronics"});
    await Product.create({name:"Laptop",price:939.44,categoryId:category.id});
    await Product.create({name:"Smartphone",price:348.33,categoryId:category.id});
    // fetch category with products
    const categoryWithProducts = await Category.findOne({
        where:{id:category.id},include:[{model:Product,as:'products'}]
    })

    console.log("CategoryWithProducts------------------------------------------------------------",categoryWithProducts);


}).catch(err =>{
    console.error("Error syncing database: -----------------------------------------------------------------------------------------------",err)
})