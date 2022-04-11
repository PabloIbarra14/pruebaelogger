const Joi=require('joi');

const authorizacion_joi=Joi.object({
    token:Joi.string().max(180).required(),
    application_id:Joi.string().required()
});
module.exports={authorizacion_joi};