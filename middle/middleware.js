const middleware = ( req, res, next) => {
    res.send(req.path);
    next();
  };

  module.exports = middleware ;