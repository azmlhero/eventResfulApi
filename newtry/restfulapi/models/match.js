var mongoose= require("mongoose");

var matchSchema = mongoose.Schema({

  city:  String,
  date:  Date,
  teamA:  String,   
  teamB:  String
});

var Match = mongoose.model("Match", matchSchema)

module.exports = Match;
