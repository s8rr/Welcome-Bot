const Discord = require('discord.js');
const client = new Discord.Client();

// Event handler for when the bot is ready
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

// Event handler for when the bot receives a message
client.on('message', message => {
    // Ignore messages from the bot itself
    if (message.author.bot) return;

    if (message.content.toLowerCase() === 'ping') {
        message.channel.send('Pong!');
    }
});

// Log in to Discord with your app's token
const token = 'YOUR_BOT_TOKEN';
client.login(token);
