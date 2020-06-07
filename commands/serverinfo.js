const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const embedcolors = require("../colors.json");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
  let sEmbed = new Discord.MessageEmbed()
  .setColor(embedcolors.GREEN)
  .setTitle("Server Information")
  .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTfYuRkVpEGsOBsjTEICNZNVGR_IGT1MXA4GOfk_oz1k4geG6gs&usqp=CAU')
  .setAuthor(`${message.guild.name} Info`,)
  .setThumbnail(message.guild.iconURL())
  .addFields(
    {name: "**Server Name:**", value: `${message.guild.name}`},
    {name: "**Server Owner:**", value: `${message.guild.owner}`},
    {name: "**Member Count:**", value: `${message.guild.memberCount}`},
    {name: "**Server Created At**", value: `${moment(message.guild.createdAt).format('MMMM Do YYYY, h:mm a [(EST)]')}`,}
  )
  .setFooter(`Bot Created by | SnakeGames#1437`, bot.user.displayAvatarURL());
  message.channel.send({embed: sEmbed});
}


module.exports.config = {
  name: "serverinfo",
  aliases: ["si", "serverdesc"]
}