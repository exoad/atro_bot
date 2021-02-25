const { MessageEmbed } = require('discord.js');
module.exports = {
  config: {
      name: `help`,
      category: '',
      description: '',
      aliases: [``]
  },
  run: async (bot, message, args) => {
    try {
      const embed = new MessageEmbed()
      .setTitle("Help Menu")
      .addField("owo", "OwOify a message, yikes")
      .addField("number", "Get a fact on a number")
      .addField("howgay", "How gay are you")
      .addField("name", "Random Generated Name (Slow)")
      .setColor("RANDOM")

      message.channel.send({ embed })
  } catch (err) {
      console.log(err)
      return message.channel.send(`Oh no, an error occurred!\nThis error has been marked in the devlogs and will be reviewed soon\n*Sorry for the inconvenience.`);
      bot.channels.cache.get('').send(`${err.stack}`)
  }
}
}

