const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const embedcolors = require("../colors.json");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
    let sEmbed = new Discord.MessageEmbed()
    .setColor(embedcolors.GREEN)
    .setTitle("All Available Commands")
    .setDescription("My prefix is: .")
    .addFields(
        {name: 'User Commands', value: '`ip` `ui` `si` (more to come soon!)'},
        {name: 'Moderation Commands', value: '`warn` `kick` `ban` (you cant use these as a member`'}, 
    )
    .setFooter(`Bot Created by | SnakeGames#1437`, bot.user.displayAvatarURL());
    message.channel.send({embed: sEmbed});
}

module.exports.config = {
    name: "help",
    aliases: ["help"]
  }