const express = require('express');
const connection = require('./../../helpers/db');
const router = express.Router();

router.post('/signup', function (req, res, next) {
    const query = connection.query('INSERT INTO users (email, password, name, lastname) VALUES (?,?,?,?)', [req.body.email, req.body.password, req.body.name, req.body.lastname], function (err, results, fields) {
        if(error) res.status(500).end();
        res.send('Welcome!');
        res.end();
    })
})

module.exports = router; 