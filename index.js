require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const axios = require("axios");

client.on("ready", () => {
  console.log("Я готовлю!");
});

// client.on("message", message => {
//   if (message.content.startsWith("ping")) {
//     message.channel.send("pong!");
//   }
// });

const prefix = "!";

client.on("message", msg => {
  if (msg.author.id === "189543659912298497") {
    msg.reply("Sure thing, bread boi.");
    return;
  } else if (msg.author.bot || msg.author.id !== process.env.USER_ID) return;
  else {
    axios
      .get("https://translate.yandex.net/api/v1.5/tr.json/translate", {
        params: {
          key: process.env.YANDEX_API_KEY,
          text: msg.content,
          lang: "ru"
        }
      })
      .then(res => {
        if (res.data.text[0] !== msg.content) {
          msg.reply(res.data.text[0]);
        }
      });
  }
});

client.login(process.env.BOT_TOKEN);
