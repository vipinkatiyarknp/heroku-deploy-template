var express = require('express');
var router = express.Router();
var parseString = require('xml2js').parseString;
var xml = "<root>Hello xml2js!</root>"


/* GET users listing. */
router.post('/', function (req, res, next) {
  console.log(req.body.xmlString);
  var xml = req.body.xmlString;
  parseString(xml, function (err, result) {
    if(err){
      res.send({ "output": {"Error":"error while parsing XML"} });
    }
    else{
      res.send({ "output": result });
    }
   
  });
});

module.exports = router;
