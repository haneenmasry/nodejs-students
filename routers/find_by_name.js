var express = require('express');
const router = express.Router();
var find_name = require('../controllers/find-name');

router.get("/one" , find_name.find_name);

module.exports = router;

  