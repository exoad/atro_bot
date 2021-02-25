const { MessageEmbed } = require('discord.js');
module.exports = {
  config: {
      name: `howgay`,
      category: '',
      description: '',
      aliases: [`gay?`]
  },
  run: async (bot, message, args) => {
    try {
      function doRandHT() {
          var rand = ["0", "1", "2", "16", "4", "5", "19", "20", "22", "25", "27", "31", "34", "28", "52", "41", "32", "33", "54", "38", "36", "89", "100", "44", "67", "69", "89", "49", "79", "74", "73", "83", "86", "99", "98"];

          return rand[Math.floor(Math.random()*rand.length)];
      }
      const embed = {
        "description": "You are " + doRandHT() + "% gay",
        "color": "RANDOM",
        "title": `wow`,
      }
      message.channel.send({ embed })
  } catch (err) {
      console.log(err)
      return message.channel.send(`Oh no, an error occurred!\nThis error has been marked in the devlogs and will be reviewed soon\n*Sorry for the inconvenience.`);
      bot.channels.cache.get('806244787191414824').send(`${err.stack}`)
  }
}
}
