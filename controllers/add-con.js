const student=require('../modules/model');
  module.exports.add= async (req, res) => {
    const name = req.query.name;
    const age = req.query.age;
  
    const data = await student.create({ name ,age });
  
    res.send({
      data,
    });
  };