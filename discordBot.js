const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});
NTE1MTQzNzkzNjM5NDM0.Dlo_8A.wYeKTY5h_-CY-9awtexDphTZk40");
client.login("");