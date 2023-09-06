var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    phrase: "tacocat"
  });
});
module.exports = router;

router.post('/', function(req, res) {
  res.render('index', {
    phrase: req.body.userText,
    message: getResultDescription(req.body.userText)
  });
});





function checkPalidrone(phrase){
  let temp = phrase.split("");
  temp = temp.reverse();
  temp = temp.join("")
  if (phrase.toLowerCase().replace(":", "") === temp.toLowerCase().replace(":", "") ){
    return true
  }
  else {
    return false
  }

  if (phrase.toLowerCase().replace(" ", "") === temp.toLowerCase().replace(" ", "") ){
    return true
  }
  else {
    return false
  }
}

function getResultDescription (phrase){
  if (checkPalidrone(phrase)){
    return `${phrase} is a palindrome.`
  }
  return `${phrase} is not a palindrome.`
}