if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

const routes = require('./routes/index');
const database = require('./config/database');

app.use('/', routes);
app.use(express.static('public'));


app.listen(port, (err) => {
    if (err) console.log(err); console.log(`The server is running on port ${port} `);
});