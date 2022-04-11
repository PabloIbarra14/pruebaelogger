const Joi=require('joi');

const logs_joi=Joi.object({
    application_id:Joi.string().required(),
    type:Joi.string().valid('error', 'info', 'warning').required(),
    priority:Joi.string().valid('lowest', 'low', 'medium', 'high', 'highest').required(),
    path:Joi.string().max(180).required(),
    message:Joi.string().max(180).required(),
    request:Joi.object({
        method:Joi.string().max(180).required(),
        url:Joi.string().max(180).required()
    }),
    response:Joi.object({
        status:Joi.number().required(),
        message:Joi.string().max(180).required()
    })
});
module.exports={logs_joi};