const {WebhookClient, Suggestion} = require('dialogflow-fulfillment');

exports.handler = function(event, context, callback) {
    const agent = new WebhookClient({ request, response });
    console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
    console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
   
    function welcome(agent) {
      agent.add(`Welcome to my agent on AWS Lambda!`);
    }
   
    function fallback(agent) {
      agent.add(`I didn't understand`);
      agent.add(`I'm sorry, can you try again?`);
  }

    // Run the proper function handler based on the matched Dialogflow intent name
    let intentMap = new Map();
    intentMap.set('Default Welcome Intent', welcome);
    intentMap.set('Default Fallback Intent', fallback);
    agent.handleRequest(intentMap);
    
    callback(null, {"message": "Successfully executed"});
}