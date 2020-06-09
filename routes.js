const express = require('express');
const router = express.Router();
const config = require('./config')

router.get('/grant/token', (req, res) => {
    console.log('/grant/token');
});

router.get('/get/tokens/:grant', (req, res) => {
    console.log('/get/tokens/:grant');
});

router.get('/grant/token/refresh', (req, res) => {
    console.log('/grant/token/refresh');
});

module.exports = router;