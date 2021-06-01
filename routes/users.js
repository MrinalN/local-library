//loads express module
var express = require('express');
//uses it to get .Router obj
var router = express.Router();

//specifies a route on the obj
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');


  //"next" can be used in the future if you want to add multiple route handlers to "/"
});

router.get('/cool', (req, res) => {
  res.send(`You're so cool!`);
})

//exports router from module (to be called in app.js)
module.exports = router;
