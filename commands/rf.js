const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {

if (message.guild.id !== "696515024746709003") return;

  if (message.member.hasPermission("KICK_MEMBERS")) {
 
  if (args[0] && !args[1]) {
   let j = message.guild.members.filter(member => {

   return member.roles.some(r => args[0] === r.id)

   }).map(m=>m.user.tag).join(', ');
    message.channel.send(j);
  }

  if (args[1] && !args[2]) { 
   let j = message.guild.members.filter(member => {

   return member.roles.some(r => args[0] === r.id) && member.roles.some(r => args[1] === r.id)

   }).map(m=>m.user.tag).join(', ');
    message.channel.send(j);
  }

  if (args[2] && !args[3]) { 
   let j = message.guild.members.filter(member => {

   return member.roles.some(r => args[0] === r.id) && member.roles.some(r => args[1] === r.id) && member.roles.some(r => args[2] === r.id)

   }).map(m=>m.user.tag).join(', ');
    message.channel.send(j);
  }

 }

}

module.exports.help = {
   name: "rf",
   aliases: ["rolefind", "searchrole", "findrole"]
}