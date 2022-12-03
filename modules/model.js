const {Model, DataTypes} = require('sequelize');
const sequelize=require('./connect');
   
class student extends Model {}
 student.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    age: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    timestamps: false,
    sequelize,
    modelName: "student",
  }

  );
  
  module.exports=student;
  