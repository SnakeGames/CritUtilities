const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const embedcolors = require("../colors.json");
const moment = require("moment");

module.exports = {
    name: "ip",
    description: "Server IP",
    category: "null",
    run: async (bot, message, args) => {
        message.channel.send('Our server is still in development, silly! Once we release, you will be able to get the IP from here!')
    }
}

module.exports.config = {
    name: "ip",
    aliases: ["ip"]
  }