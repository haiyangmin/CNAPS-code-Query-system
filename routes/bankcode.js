var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/bankcodedb');

router.get('/', function(req, res) {
    var collection = db.get('bankcode');
    collection.find({}, function(err, bankcode){
        if (err) throw err;
      	res.json(bankcode);
    });
});

module.exports = router;