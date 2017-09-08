const express = require('express');
const path = require('path');
const fs = require('fs');
const Router = express.Router();

const imgur = require('../services/imgur');
const History = require('../models/history');

// when using express router and not using a template engine I need
// to use the file system to access my index.html file.
Router.get('/', (req, res) => {
    fs.readFile('public/index.html', (err, html) => {
        res.writeHeader(200, {"Content-Type": 'text/html'});
        res.write(html);
        res.end();
   });
});

Router.get('/latest', (req, res) => { 
    History.find({}, 'term when -_id').sort('-when').limit(10)
        .then(results => {
            res.json(results);
        })
        .catch(error => {
            if (error) throw error;
        })
});

Router.get('/search/:q', (req, res) => {  
    imgur.getImage(req.params.q, req.query.offset)
        .then(ans => {
            new History({ term: req.params.q }).save();
            res.json(ans);
        })
        .catch(error => {
            if (error) throw error;
        })
});

module.exports = Router;