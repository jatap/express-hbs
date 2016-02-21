var express = require('express');
var router = express.Router();

/* GET demo. */
router.get('/', function(req, res, next) {
  res.send('demo section');
});

module.exports = router;
