require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const Enmap = require("enmap");
const fs = require("fs");
client.config = process.env;

client.on("ready", () => {
  console.log("Я готовлю!");
  client.user.setActivity("Привет!");
});

fs.readdir("./events/", (err, files) => {
  if (err) return console.log(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});
client.on("error", e => console.log(e));
client.on("warn", e => console.log(e));
client.on("debug", e => console.log(e));
client.login(process.env.BOT_TOKEN);
