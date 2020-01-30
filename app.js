const express = require('express');
const app = express();
const port = 4000;
const dashboardRouter = require('./routes/dashboard');

app.use(express.urlencoded({extended: false}))
app.use('/', dashboardRouter);

app.listen(port, () => {
    console.log('Server is running port ' + port);
})
