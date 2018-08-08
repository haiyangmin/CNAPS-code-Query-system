var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/bankcode/provinces/:provinceName/city/:cityName/bank/:bankName', function(req, res) {
  var db = req.db;
  var province = req.params.provinceName;
  var city = req.params.cityName ;
  var bank = req.params.bankName ; 
  var collection = db.get('bankcode');
  collection.find({
    $and: [
      {Province: province}, {City:city},{Bank:bank}
   ]
  },function(err,docs){
    if (err) throw err;
    res.json(docs);
  });
});

module.exports = router;
