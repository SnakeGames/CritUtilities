const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
const embedcolors = require("./colors.json");

const bot = new Discord.Client({disableEveryone: true});


bot.on('ready', () => {
  bot.user.setActivity("for '.' ", { type: 'WATCHING' })
  console.log('ready!')
})

const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err)

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0) {
    return console.log("[LOGS] Couldn't find commands!");
  }

  jsfile.forEach((f, i) =>{
    let pull = require(`./commands/${f}`);
    bot.commands.set(pull.config.name, pull);
    pull.config.aliases.forEach(alias => {
      bot.aliases.set(alias, pull.config.name)
    });
  });
});


bot.on("message", async message => {
  if (message.channel.type == "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ")
  let cmd = messageArray[0];
  let args = messageArray.slice(1);


  let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
  if(commandfile) commandfile.run(bot,message,args)

});
bot.login(process.env.token);
