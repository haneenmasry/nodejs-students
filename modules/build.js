const { Sequelize} = require("sequelize");
const sequelize = new Sequelize("task", "postgres", "123456", {
    host: "localhost",
    dialect: "postgres",
    logging: false,
  });
  sequelize.authenticate().then(() => {
    console.log("Database Build");
  });
  

 module.exports=sequelize;