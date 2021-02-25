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
const Discord = require('discord.js');
module.exports = {
    config: {
        name: `echo`,
        category: 'Fun',
        description: 'Echo your message!',
        aliases: [`mock`, `say`, `tell`, `write`, `yttriuspeak`]
    },
    run: async (bot, message, args) => {
        try{
        let rety = message.content.split(" ").slice(1);
    message.delete().catch(error => {
        if (error.code !== Discord.Constants.APIErrors.UNKNOWN_MESSAGE) {
            message.channel.send("Error | Invalid Permissions Met")
        }
    });
    if (message.content.includes("@everyone")  || message.content.includes("nigger") || message.content.includes("@here") || message.content.includes("niggers") || message.content.includes("porn") || message.content.includes("bitch")) return message.reply("Wtf are you trying to make me do");
    message.channel.send(`${message.author.tag} has said: ` +rety.join(" ")).cleanContent;
    bot.channels.cache.get('806245388095979560').send(`${message.author.id}\n**Server:** ${message.guild.id}\nHas said: `+rety.join(" "))
        //error handler and listener
    } catch(err) {
        message.channel.send("**Something went wrong**\nPlease hold on while the devs work to fix this!");
        console.log(err)
    }

    }
}
