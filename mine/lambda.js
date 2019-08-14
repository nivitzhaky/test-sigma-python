const {WebhookClient, Suggestion} = require('dialogflow-fulfillment');

exports.handler = function(event, context, callback) {
    
    callback(null, {"message": "Successfully executed"});
}