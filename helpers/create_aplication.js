const Joi = require('joi');

 const aplication_joi = Joi.object({
    name: Joi.string().min(5).max(60).required()
});
module.exports = {aplication_joi};