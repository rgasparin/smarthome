var express = require('express');
var Gpio = require('onoff').Gpio; 
var sleep = require('sleep');

var router = express.Router();

/* GET users listing. */
router.get('/',  function(req, res, next) {
  res.render('portao');
});

/* GET users listing. */
router.get('/abrirFecharPortao',  function(req, res, next) {
	try{
	var LED = new Gpio(17, 'high');	

	LED.writeSync(0);   
	sleep.msleep(500);
	LED.writeSync(1);	
	} catch(e){
		console.log(e);
	}
	


  res.send('ok');
});

router.get('/abrirFecharPortaoTimer',  function(req, res, next) {
	try{
		var LED = new Gpio(17, 'high');	

		LED.writeSync(0);   
		sleep.msleep(500);
		LED.writeSync(1);	
		sleep.sleep(30);
		LED.writeSync(0);   
		sleep.msleep(500);
		LED.writeSync(1);
	} catch(e){
		console.log(e);
	}
	


  res.send('ok');
});

module.exports = router;
