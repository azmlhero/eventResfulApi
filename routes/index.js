var express = require('express');
var router = express.Router();

let events = [

  {
     "id": 1,
     "name": "Birthday_Party",
     "event_description": "This delighted event contain stage and room decoration balllons and some suuplementary services also part of our services",
     "event_TimeFrame": "3 hours"
  
    },
   {
     "id": 2,
     "name": "Cooperate_Party",
     "event_description": "This event description sakd bkhasbdkasdkasbd kjbasdk"
   },
   {
     "id": "3",
     "name": "Wedding",
     "event_description": "event contain stage setup hall full of decent rose setting and lights and Lanterns  ",
     "event_TimeFrame": "3 hours"

   }
    
 ]  


 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/events", function(req,res)
{
  res.send(events);
})
module.exports = router;
