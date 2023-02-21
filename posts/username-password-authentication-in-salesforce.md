---
title: "Username Password Authentication in Salesforce"
date: "2022-10-15"
excerpt: "In this blog, we will discuss the setup and testing of Username – Password Authentication in Salesforce."
cover_image: "/images/posts/img1.jpg"
tags: ["Identity", "Salesforce"]
---

When it comes to performing an API Integration into Salesforce, authentication & authorization is the first thing that you have figure out. Salesforce provides the following ways to authenticate into Salesforce.

1. Username – Password Authentication
2. OAuth 2.0
3. JSON Web Tokens (JWT)

In this blog, we will discuss the setup and testing of Username – Password Authentication in Salesforce.

## Pre-Requisites

1. A user record should be created in Salesforce.
2. You should ensure that the user is able to login to Salesforce via standard Salesforce Login Screen.

> Remember this point: The User setup in Salesforce is not required to have API Access for attempting authentication into Salesforce via the above 3 methods.

## Username – Password Authentication

This is the standard way of authenticating into Salesforce. You would prefer this technique when you have username, password and security token. You need to setup a Connected App in Salesforce so that you obtain a Client ID and Client Secret for initiating the authentication with username, password and security token.

### How to set up the Connected App?

1. Login to Salesforce with a user that has administrator rights.
2. Navigate to Setup –> Apps –> App Manager
3. Create a new Connected App
4. Provide the Connected App Name as “UPAuth”
5. Provide your email in Contact Email
6. Set “Enable OAuth Settings” as true
7. Set “Callback URL” as https://www.salesforce.com
8. In Selected OAuth Scopes, add the following
   1. Manage user data via APIs (api)
   2. Perform requests at any time (refresh_token, offline_access)
9. Ensure “Require Secret for Web Server Flow” is set to true
10. Ensure “Require Secret for Refresh Token Flow” is set to true
11. Click on “Save”
12. You will see a message “Changes can take up to 10 minutes to take effect. Deleting a parent org also deletes all connected apps with OAuth settings enabled.”
13. Click on “Continue”

On the Connected App that you created just now, do the following to obtain the Client ID and Client Secret.

1. Click on “Manage Consumer Details” button
2. The Consumer Key is your Client ID
3. The Consumer Secret is your Client Secret
4. Copy these 2 values. We will require it for testing via Postman.

## How to test the Username – Password Authentication?

1. Download Postman (we will use this tool to test the authentication)
2. Create a POST HTTP Request
   1. URL: https://login.salesforce.com/services/oauth2/token
   2. Body
      - username = (your salesforce username)
      - password = (your salesforce password + security token)
      - grant_type = password (this tells salesforce that the authentication technique is username – password)
      - client_id = (the consumer key obtained from the connected app)
      - client_secret = (the consumer secret obtained from the connected app)

![Postman Salesforce Login](/posts/20221015005316-1.png "Postman Salesforce Login")

In the Response, you will get an “access_token”. This confirms that your username-password authentication is working.
