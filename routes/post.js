const router = require('express').Router();
const verify = require('./verify');

router.get('/', verify, (req, res) => {
    res.json({
        title: 'My API',
        description: 'Node.js, Express,MongoDB and JsonWebToken AP'
    });
});


module.exports = router;