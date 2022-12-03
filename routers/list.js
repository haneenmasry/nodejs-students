var express = require('express');
const router = express.Router();
var list = require('../controllers/list-con');

router.get("/list" , list.list);

module.exports = router;