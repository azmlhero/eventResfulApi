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

const EventsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
})

let eventschema = mongoose.model('EventSchema', EventsSchema);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/events", function(req,res)
{
    let all_events = eventschema.find();
    all_events
        .then((result)=> {
        res.send(result);
    }).catch((err)=> {
        res.send(err);
    })
})

router.post('/events', function (req, res) {
    let testevent = new eventschema({
        name: req.body.name,
        description: req.body.description
    })

    testevent.save().then(()=> {
        res.status(200).send("Event added")
    }).catch((err)=>{
        res.send("Unable to add event");
    })
})
module.exports = router;
