const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const embedcolors = require("../colors.json");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
    let sEmbed = new Discord.MessageEmbed()
    .setColor(embedcolors.GREEN)
    .setTitle("User Information")
    .setThumbnail(message.author.displayAvatarURL())
    .setAuthor(`${message.author.username} Info`)
    .addFields(
        {name: '**Username**', value: `${message.author.username}`},
        {name: '**Status**', value: `${message.author.presence.status}`},
        {name: '**Account Created**', value: `${moment(message.author.createdAt).format('MMMM Do YYYY, h:mm a [(EST)]')}`,}
    )
    .setFooter(`Bot Created by | SnakeGames#1437`, bot.user.displayAvatarURL());
    message.channel.send({embed: sEmbed});
}

module.exports.config = {
    name: "userinfo",
    aliases: ["ui", "userinfo"]
  }