const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
// fake login key, add your own
client.login('NDgwNTE1MTQzNzkzNjM5NDM0.Dlulug.foiCbMuGI9w9sBvtkE4Psxnonzs');
