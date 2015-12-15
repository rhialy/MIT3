var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

module.exports = router;
