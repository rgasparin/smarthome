var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/',  function(req, res, next) {
  delete req.session.authenticated;
  res.redirect('/login');
});

module.exports = router;