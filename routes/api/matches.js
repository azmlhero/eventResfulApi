var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testproject',
    {useNewUrlParser: true})
    .then(()=>{
        console.log("Database connected")
    }).catch(()=> {
    console.log("Unable to connect to db")
})



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/events", function(req,res)
{
    let matches = eventschema.find();
    matches
        .then((result)=> {
        res.send(result);
    }).catch((err)=> {
        res.send(err);
    })
})




// write json file in postman and test it postman raw menu slect JSON option 
router.post('/events', (req, res ) => {
  let data = req.body;

  if (data.teamB === data.teamA) {
    return res.status(400).send({
      message: "match should be between different teams"
    }); 
  }

  let slot = await MatchModel.create({
    date: new Date(new Date(data.date).getDate()),
    city: data.city,
    teamA: data.teamA,
    teamB: data.teamB,
  });

  res.status(201).send(slot);

})
module.exports = router;
