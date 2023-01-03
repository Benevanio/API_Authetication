const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../model/user');
const {
    RegisterValidation
} = require('../validation');

router.post('/register', async (req, res) => {
    // Validate the data before we make a user
    const {
        error
    } = RegisterValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    //create new user
    const emailExist = await User.findOne({
        email: req.body.email
    });
    if (emailExist) return res.status(400).send('Email already exists');

const salt = await bcrypt.genSalt(10);
const Haspassword = await bcrypt.hash(req.body.password, salt);


const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: Haspassword,
    date: req.body.date
});
try {
    //save user to MongoDB
    const savedUser = await user.save();
    res.send(savedUser);
} catch (err) {
    //res.status in case of error
    res.status(400).send(err);
}
});

module.exports = router;