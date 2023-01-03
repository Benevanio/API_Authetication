const router = require('express').Router();
const User = require('../model/user');
const Joi = require ('joi')

const schema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    repeat_password: Joi.ref('password'),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })


});
router.post('/register', async (req, res) => {
    // Validate the data before we make a user
    const { error } = schema.validate(req.body);
   if(error) return res.status(400).send(error.details[0].message);
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        date: req.body.date
    });
   try{
    const savedUser = await user.save();
    res.send(savedUser);
    }catch(err){
        res .status(400).send(err);
    }
   
});

module.exports = router;