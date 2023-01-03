const Joi = require('joi');

//validate users

const RegisterValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),
        password: Joi.string(),
        //.pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        //repeat_password: Joi.ref('password'),
        email: Joi.string()
            .email({
                minDomainSegments: 2,
                tlds: {
                    allow: ['com', 'net']
                }
            })
    });
    return Joi.isSchema(data, schema);
}
const LoginValidation = (data) => {
    const schema = Joi.object({
        password: Joi.string(),
        //.pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        //repeat_password: Joi.ref('password'),
        email: Joi.string()
            .email({
                minDomainSegments: 2,
                tlds: {
                    allow: ['com', 'net']
                }
            })
    });
    return Joi.isSchema(data, schema);
}

module.exports.RegisterValidation = RegisterValidation;
module.exports.LoginValidation = LoginValidation;