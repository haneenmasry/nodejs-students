const student=require('../modules/model');

  module.exports.update=async (req, res) => {
    const name = req.query.name;
    const data = await student.update(
      {
        name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
  
    res.send({
      data,
    });
  };