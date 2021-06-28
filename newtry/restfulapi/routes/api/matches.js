var express = require('express');
var router = express.Router();
var Match = require("../../models/match");

router.get ("/",(req,res)=>
{
   
Match.find().then(matches => { res.send(matches)}).catch(err => {console.log(err); res.sendStatus(409)});

 
})
// async function getMatches(req, res) {
//   let matches = await MatchModel.find();
//   res.send(matches);
// }

router.post("/", (req,res)=>{
  let match = new Match();


  match.city =req.body.city;
  match.date=req.body.date;
  match.teamA=req.body.teamA;
  match.teamB=req.body.teamB;
  match.save();
  return res.send(match)
})

module.exports = router;


// // /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });