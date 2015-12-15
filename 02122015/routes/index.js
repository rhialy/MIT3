var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hallu', myName: 'Daniel || Matrikelnummer: 742896' });
});

module.exports = router;
