exports.run = (client, msg, args) => {
  msg.channel.send({
    embed: {
      color: 3447003,
      title: "Russki Guide",
      description: "These are the commands that I know, my friend.",
      fields: [
        {
          name: "!t {language} {message}",
          value: "I translate a message for you in a provided language."
        },
        {
          name: "!languages",
          value: "I provide a list of languages that I understand."
        }
      ],
      footer: {
        icon_url: client.user.avatarURL,
        text: "© Russki Bot"
      }
    }
  });
};

// msg.reply(
//   "**Commands I know**: " +
//     "\n```!t {language} {message}*``` " +
//     "\nI translate a message for you in a provided language. " +
//     "\n" +
//     "\n```!languages```" +
//     "\nI provide a list of languages that I understand."
// );
