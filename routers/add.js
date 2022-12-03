var express = require('express');
const router = express.Router();
var add = require('../controllers/add-con');

router.get("/add" , add.add);

module.exports = router;