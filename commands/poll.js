const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const embedcolors = require("../colors.json");
const moment = require("moment");

module.exports = {
    name: "poll",
    description: "Create a simple yes or no poll",
    category: "fun",
    run: async (bot, message, args) => {
      if (!message.member.permissions.has("ADMINISTRATOR"))
        return message.channel.send(
          `You do not have admin, ${message.author.username}`
        );
      const channel =
        message.mentions.channels.first() ||
        message.guild.channels.cache.get(args[0]);
      if (!channel) {
        return message.channel.send(
          `You did not mention / give the id of your channel!`
        );
      }
      let question = message.content.split(' ').splice(2)
        .join(" ");
      if (!question)
        return message.channel.send(`You did not specify your question!`);
      const Embed = new Discord.MessageEmbed()
        .setTitle(`New poll!`)
        .setDescription(`${question}`)
        .setFooter(`${message.author.username} created this poll.`)
        .setColor(`RANDOM`);
      let msg = await bot.channels.cache.get(channel.id).send(Embed);
      await bot.channels.cache.get(channel.id).send('@everyone **24 HOURS**')
      await bot.channels.cache.get(channel.id).send('First to 5 wins!')
      await msg.react("✅");
      await msg.react("❌");
    },
  };

  module.exports.config = {
    name: "polls",
    aliases: ["poll", "p"]
  }