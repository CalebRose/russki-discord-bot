exports.run = (client, msg, args) => {
  msg
    .reply(
      "Use the following languages below: " +
        "\nen - English" +
        "\nru - Russian" +
        "\nhe - Hebrew" +
        "\nit - Italian" +
        "\nes - Spanish" +
        "\nzh - Chinese" +
        "\nko - Korean" +
        "\nnl - Dutch" +
        "\nda - Danish" +
        "\nis - Icelandic"
    )
    .catch(console.error);
};
