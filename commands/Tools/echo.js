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
          //word filter!!!!!
    if (message.content.includes("@everyone")  || message.content.includes("nigger") || message.content.includes("@here") || message.content.includes("niggers") || message.content.includes("porn") || message.content.includes("bitch")) return message.reply("Wtf are you trying to make me do");
    message.channel.send(rety.join(" ")).cleanContent;
    bot.channels.cache.get('806245388095979560').send(`${message.author.id}\n**Server:** ${message.guild.id}\nHas said: `+rety.join(" "))
        //error handler and listener
    } catch(err) {
        message.channel.send("**Something went wrong**\nPlease hold on while the devs work to fix this!");
        console.log(err)
    }

    }
}
