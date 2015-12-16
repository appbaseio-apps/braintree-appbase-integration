# Braintree subscription with Appbase

![alt tag](http://g.recordit.co/iD9jgKlLZx.gif)  

This is the frontend repository. Before running this, make sure you've went through all the steps in the [server respository](https://github.com/yashshah/braintree-appbase-integration-server)    

First install the node packages by running following command:
```
npm install
```   

Start the node.js server:
```
npm start
```    

You can view the app at [http://localhost:8001](http://localhost:8001)   

To Build it for production:
```
npm run build
```   

## Dive into Codebase

Appbase and Braintree can be really powerful to update the pricing plan of the user on the certain condition. For this project, we are changing the pricing plan of the user based on the number of API calls made by the user. One can simulate the number of API calls from the frontend module.


The integration is divided into two sub modules:
 - Frontend Module: Simulates the API call and update the value in Appbase
 - Backend Module: Webhooks make the request to server and server updates the pricing plan for the user in the braintree.

When you update number of API call, it gets updated in the Appbase. In Appbase, webhooks are configured on the threshold that defines the pricing plan. So when the condition is made, the request is made on the backend module. 

 - You're required to enter your Appbase crendentials in the config file.
 - You're also required to enter your braintree crendentials in the config file.
 - You will have to create the plan and subscription in the Braintree and update the id in the config file, and based on your logic you will specify the condition in the webhook request.

For managing the subscription and plans:
 For this project, we have created 5 plans and you can create your own plans and specify in the config file. You can set the webhooks after that to call the server which will then update the plan in the braintree.

To configure the webhooks, one is required to run the curl statement that are available in the webhook file.

 This project ends the polling to check if the number of API calls has reach the threashold to change the pricing plane which otherwise would have required.