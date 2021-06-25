var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

var  matchSchema = mongoose.Schema({
 city: {type: String, required: true},
  date: {type: Date, required: true},
  teamA: {type: String, required: true},
  teamB: {type: String, required: true},
})

var Matchschema = mongoose.model('MatchSchema', matchSchema);


function validateProduct(data) {
  const schema = Joi.object({
    city: Joi.string().min(5).max(20).required(),
    date: Joi.date().required(),
    teamA: Joi.string().min(5).max(20).required(),
     teamB: Joi.string().min(5).max(20).required(),

  });
  return schema.validate(data, { abortEarly: false });
}
module.exports.Product = Product;
module.exports.validate = validateProduct;
