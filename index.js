const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
mongoose.connect(
    
    process.env.CONNECT,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
},()=>
console.log('Connected to DB!'))

const port = 3008;

const authRoute = require('./routes/auth');

app.use('/api/user', authRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});