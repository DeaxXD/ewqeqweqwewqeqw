const Discord = require("discord.js"),
  client = new Discord.Client();
const db = require("quick.db")
const moment = require("moment")
const conf = require('../config.js');

module.exports.run = async (client, message, args) => {
  const voiceChannels = message.guild.channels.cache.filter(c => c.type === "voice");
  let count = 0;

  for (const [id, voiceChannel] of voiceChannels)//discord.gg/türkiye
    count += voiceChannel.members.size;
  const role = message.guild.roles.find("id", `1070754711835246643`);
  const sayembed = new Discord.MessageEmbed()
    .addField(`Tagdaki üye sayısı`, `${role.members.size}`)
    .addField(`Sunucudaki üye sayısı `, `${message.guild.memberCount}`)
    .addField(`Sesteki üye sayısı `, `${count}`)
  message.channel.send(sayembed)
}
exports.config = {
  name: "say",
  guildOnly: false,
  aliases: ["sunucub"],
};