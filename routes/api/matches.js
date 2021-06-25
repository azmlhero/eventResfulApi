let router = express.Router();
let Match = require('../models/matchSchema');

router.post('/match', async (req, res) => {
    let match = new Match({
        city: req.body.city,
        date: req.body.date,
        teamA: req.body.teamA,
        teamB: req.body.teamB
    })
    await match.save().then(() => {
        res.sendStatus(200);
    }).catch(()=> {
        res.sendStatus(409);
    })
})

router.get('/matches', async(req, res) => {
    Match.find().then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err);
        res.sendStatus(404);
    })
})

module.exports = router;