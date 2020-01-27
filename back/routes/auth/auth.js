const express = require('express');
const router = express.Router();
const connection = require('../../helpers/db.js');

router.post('/signup', function (req, res, next) {
    const q = 'INSERT INTO users (email, password, name, lastname) VALUES (?,?,?,?)';
    const data = req.body
    connection.query[q, data.email, data.password, data.name, data.lastname],
        (error, results, fields) => {
        if (error)
            res.status(500).json({ flash: error.message });
        else
            res.status(200).json({ flash: "User has been signed up!" });
        };
});

module.exports = router;