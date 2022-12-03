const student=require('../modules/model');

  module.exports.list= async (req, res) => {
    const data = await student.findAll();
  
    res.send({
      data,
    });
  };