/*
MIT License

Copyright (c) 2021 exoad

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
module.exports = {
  config: {
      name: `insult`,
      category: '',
      description: '',
      aliases: [``]
  },
  run: async (bot, message, args) => {
    try {
      const { insult } = await fetch('https://insult.mattbas.org/api/insult.json').then(response => response.json());
      let rety = message.content.split(" ").join(" ").slice(8);
      if(args.slice(0).join(" ") == "nigger" || args.slice(0).join(" ") == "shit" || args.slice(0).join(" ") == "nickghur" ||args.slice(0).join(" ") == "shithead" || args.slice(0).join(" ") == "fuck" || args.slice(0).join(" ") == "nickgur" || args.slice(0).join(" ") == "fucker" || args.slice(0).join(" ") == "shitter" || args.slice(0).join(" ") == "porn" || args.slice(0).join(" ") == "nsfw" || args.slice(0).join(" ") == "NSFW" || args.slice(0).join(" ") == "hentai" || args.slice(0).join(" ") == "HENTAI" || args.slice(0).join(" ") == "furry porn" || args.slice(0).join(" ") == "nick ghur" || args.slice(0).join(" ") == "sex" || args.slice(0).join(" ") == "pornography" || args.slice(0).join(" ") == "porno" || args.slice(0).join(" ") == "milf" || args.slice(0).join(" ") == "rape" || args.slice(0).join(" ") == "dipshit" || args.slice(0).join(" ") == "cum" || args.slice(0).join(" ") == "fuckers" || args.slice(0).join(" ") == "fucks" || args.slice(0).join(" ") == "fucing") return message.channel.send("No.")
      const embed = new MessageEmbed()
      .setDescription(`${rety} ${insult}`)
      .setColor("RANDOM")

      message.channel.send({ embed })

  } catch (err) {
      console.log(err)
      return message.channel.send(`Oh no, an error occurred!\nThis error has been marked in the devlogs and will be reviewed soon\n*Sorry for the inconvenience.`);
      bot.channels.cache.get('').send(`${err.stack}`)
  }
}
}
