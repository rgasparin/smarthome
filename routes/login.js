var express = require('express');

var router = express.Router();
var bean = {error: ''};

/* GET home page. */
router.get('/', function(req, res, next) {
  bean.error = '';
  res.render('login', bean);
});

router.post('/', function(req, res, next) {
	
	var database = require('../common/database');
	var md5 = require('md5');

	var user = req.body.user;
	var pass = req.body.pass;

	
	database.connection.getConnection().then(conn => {
    
      conn.query('SELECT * FROM usuario WHERE user = ? and pass = ?', [user,md5(pass)])
        .then((rows) => {
			
			if (rows.length > 0) {
				req.session.authenticated =true;
				res.redirect('/');
			} else {
				bean.error = 'Login ou senha invalidas';
				res.render('login', bean);
			}
        })
        .then((res) => {
          conn.end();
        })
        .catch(err => {
          //handle error
          console.log(err); 
          conn.end();
        })
        
    }).catch(err => {
      //not connected
    });

});

module.exports = router;
