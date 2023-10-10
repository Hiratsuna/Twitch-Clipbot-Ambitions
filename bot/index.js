const tmi = require('tmi.js'),
{ channel, username, password } = require('./settings.json');

const options = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    }, 
    identity : {
        username,
        password
    },
    channels: [channel]
};

const client = new tmi.Client(options);
client.connect().catch(console.error);

client.on('connected', () => {
    client.say(channel, 'senpAI noticed me!');
});

client.on('message', (channel, user, message, self) => {
    if(self) return;

    if(message == '!ilove') {
        client.say(channel,`ur mum!`);
    }});

