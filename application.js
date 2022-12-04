require('dotenv').config();
const express = require('express')();
const { router } = require('./routes/routes');

express.use(router);

module.exports = { express };