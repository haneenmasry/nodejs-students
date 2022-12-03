const student=require('../modules/model');

  module.exports.find_id=async (req, res) => {
    const data = await student.findOne({
      where: {
        id: req.params.id,
      },
    });
  
    res.send({
      data,
    });
  
  };