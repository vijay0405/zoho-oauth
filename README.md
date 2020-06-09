# **Tool for Generating grant, refresh and access tokens for using Zoho api's**

**Modify config.js**
You need :
    clientId
    clientSecret
    redirectUri

Go to zoho developer console

Register your application and update config.js accordingly and change the scope if necessary.

**1. Generate grant token**
http://localhost:3005/grant/token

You will get redirected to the "redirectUri" that you specified during registration of the app. Note down the "code={grant_token}" parameter. This is a short-lived token (valid only for a minute) and will be used to generate the access token and refresh token.

**2. Get refresh and access tokens**
http://localhost:3005/get/tokens/:grant_token

response: {"access_token": '$access_token',"refresh_token":'$refresh_token',"api_domain":"https://www.zohoapis.in","token_type":"Bearer","expires_in":3600}

**3. Access tokens can be renewed using the refresh token obtained in previous step**
http://localhost:3005/get/token/:refresh_token


