const router = require('express').Router();

router.post('/register', (req, res) => {
    res.json({
       name: "Bene",
         email: "Bene@gmail.com",
         passsword: "123456",
         age: 25

    }); 
});

module.exports = router;