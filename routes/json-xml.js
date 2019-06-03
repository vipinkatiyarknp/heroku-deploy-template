var express = require('express');
var router = express.Router();
var jsonxml = require('jsontoxml');


/* GET users listing. */
router.post('/', function (req, res, next) {
  var dataObj = req.body;
  console.log(dataObj);
  var xml = jsonxml(dataObj);
  res.send({ "output": xml });
});

module.exports = router;
