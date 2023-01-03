const express = require('express');
const app = express();

const port = 3008;

const authRoute = require('./routes/auth');

app.use('/api/user', authRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
