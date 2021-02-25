//deprecated : const { Discord, MessageEmbed } = require('discord.js');

module.exports = async (bot) => {
  console.log(`${bot.user.tag} is now online.`)
  bot.user.setPresence({ activity: { name: 'production manager' }, status: 'dnd' })
}
