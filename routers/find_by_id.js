var express = require('express');
const router = express.Router();
var find_id = require('../controllers/find-id');

router.get("/add/:id" , find_id.find_id);

module.exports = router;