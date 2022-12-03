const student=require('../modules/model');
  module.exports.find_name=async (req, res) => {
    const data = await student.findOne({
      where: {
        name: req.query.name,
      },
    });
  
    res.send({
      data,
    });
  
  };