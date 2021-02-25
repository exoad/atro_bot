const Discord = require('discord.js')
const superagent = require('superagent')

module.exports = {
    config: {
        name: `name`,
        category: 'Fun',
        description: 'OwOify your message!',
        aliases: [`randoname`]
    },
    run: async (bot, message, args, tools) => {
        try {
            const { body } = await superagent
                .get("https://nekos.life/api/v2/name");


            message.channel.send(body.name).catch(error => message.channel.send('**Something went wrong!**\n1.The String entered might have contained invalid characters\n2.Internal Error\n3.Long strings won\'t be processed properly\n4.Characetrs like [], {}, or () might mess things up!\n*For further info, consider joining my discord: `https://discord.gg/wTAcPZxwqq`*'))
        } catch (err) {
            message.channel.send("Something went wrong!\nAn internal error was encountered it will be fixed soon!")
            console.log(err)
            bot.channels.cache.get('806244787191414824').send(`${err.stack}`)
        }
    }
}
