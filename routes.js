const express = require('express');
const router = express.Router();
const config = require('./config')
const request = require('request');


router.get('/grant/token', (req, res) => {
    console.log('/grant/token');
    const urlGrant = `https://accounts.zoho.in/oauth/v2/auth` +
        `?scope=${config.scope}` +
        `&client_id=${config.clientId}` +
        `&response_type=code&access_type=offline` +
        `&redirect_uri=${config.redirectUri}` +
        `&prompt=consent`;

    res.json({
        'visit this url': urlGrant,
        'instructions': 'You will be redirected to the "redirectUri" that you specified during registration of the app.' +
          'Note down the "code={grant_token}" parameter.' +
          'This is a short-lived token (valid only for a minute) and will be used to generate the access token and refresh token.'
      });
});

router.get('/get/tokens/:grant', (req, res) => {
    console.log('/get/tokens/:grant');
    const urlForAccesToken = `https://accounts.zoho.in/oauth/v2/token` +
        `?code=${req.params.grant}` +
        `&client_id=${config.clientId}` +
        `&client_secret=${config.clientSecret}` +
        `&redirect_uri=${config.redirectUri}` +
        `&grant_type=authorization_code` +
        `&scope=${config.scope}`

    request.post({uri: urlForAccesToken}, (err, response, body)=>{
        if(err) {
            res.send(err);
        } else {
            res.json(JSON.parse(response.body));
        }
    })
});

router.get('/grant/token/refresh', (req, res) => {
    console.log('/grant/token/refresh');
});

module.exports = router;