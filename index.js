const Botkit = require('botkit');

if (!process.env.SLACK_ACCESS_TOKEN) {
  console.log('Error: Specify token in environment');
  process.exit(1);
}

const controller = Botkit.slackbot({
    debug: false
});

controller.spawn({
    token: process.env.SLACK_ACCESS_TOKEN
}).startRTM(function(err){
    if (err) {
        throw new Error(err);
    }
});

// say hi
controller.hears('hi',['direct_message','direct_mention','mention','ambient'],function(bot,message) {
    bot.reply(message,'hi');
});