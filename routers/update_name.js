  var express = require('express');
const router = express.Router();
var update = require('../controllers/update');

router.get("/edit/:id", update.update);

module.exports = router;