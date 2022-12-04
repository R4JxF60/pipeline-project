const express = require('express');

const router = express.Router();

router.get('/', function(request, response, next) {
    response.status(200).send({
        message: "hello world"
    })
    next();
});

module.exports = { router };