const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const embedcolors = require("../colors.json");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
    let sEmbed = new Discord.MessageEmbed()
    .setColor(embedcolors.GREEN)
    .setTitle("RELEASED")
    .setDescription("Join our server <changeiplater>")
    .addFields(
        {name: 'VERSIONS WE SUPPORT', value: '`1.8x`'}
    )
    .setFooter(`Bot Created by | SnakeGames#1437`, bot.user.displayAvatarURL());
    message.channel.send({embed: sEmbed});
    message.channel.send('@everyone');
}


module.exports.config = {
  name: "release",
  aliases: ["release"]
}
