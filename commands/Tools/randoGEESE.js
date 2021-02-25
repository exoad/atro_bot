/**
* 
*/
const { MessageEmbed } = require('discord.js');
const superagent = require('superagent');
module.exports = {
  config: {
    name: `goose`,
    category: '',
    description: '',
    aliases: [`geese`]
  },
  run: async (bot, message, args) => {
    try {
      const { body } = await superagent
        .get('https://nekos.life/api/v2/img/goose');

      const embed = new MessageEmbed()
        .setTitle('A random geese/goose')
        .setImage(`${body.url}`)
        .setColor("RANDOM")

      message.channel.send({ embed }).then(m => {
        m.react('❤️')
      })
    } catch (err) {
      console.log(err)
      message.channel.send(`Oh no, an error occurred!\nThis error has been marked in the devlogs and will be reviewed soon\n*Sorry for the inconvenience.*`);
      bot.channels.cache.get('806244020971634698').send(`${err.stack}`)
    }
  }
}
