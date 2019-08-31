const axios = require("axios");

exports.run = (client, msg, args) => {
  const language = args.shift().toLowerCase();
  const message = args.slice(0).join(" ");

  axios
    .get("https://translate.yandex.net/api/v1.5/tr.json/translate", {
      params: {
        key: process.env.YANDEX_API_KEY,
        text: message,
        lang: language
      }
    })
    .then(res => {
      if (res.data.text[0] !== message) {
        msg.reply(res.data.text[0]);
      }
    });
};
