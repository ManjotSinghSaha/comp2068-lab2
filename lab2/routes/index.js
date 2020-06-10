'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {

    function calculate() {
        console.log(req.query.method);
        console.log(req.query.x);
        console.log(req.query.y);

        if (req.query.method == 'add') {
            var result = parseInt(req.query.x) + parseInt(req.query.y);
            console.log(req.query.x + ' + ' + req.query.y + ' = ' + result);
        }
        else if (req.query.method == 'subtract') {
            var result = parseInt(req.query.x) - parseInt(req.query.y);
            console.log(req.query.x + ' - ' + req.query.y + ' = ' + result);
        }
        else if (req.query.method == 'multiply') {
            var result = parseInt(req.query.x) * parseInt(req.query.y);
            console.log(req.query.x + ' * ' + req.query.y + ' = ' + result);
        }
        else if (req.query.method == 'divide') {
            var result = parseInt(req.query.x) / parseInt(req.query.y);
            console.log(req.query.x + ' / ' + req.query.y + ' = ' + result);
        }
        else {
            console.log('Invalid Parameters!!')
        }
    }

    calculate();
    
    res.render('index', { title: 'Express' });
});

module.exports = router;
