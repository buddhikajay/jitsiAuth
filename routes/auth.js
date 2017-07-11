var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
  console.log("this is the request:"+req);
});

module.exports = router;
