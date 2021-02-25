const talkedRecently = new Set();
const fetch = require('node-fetch');
const superagent = require('superagent');
module.exports = {
    config: {
        name: `number`,
    },

    run: async (bot, message, args) => {
        if (talkedRecently.has(message.author.id)) {
            message.reply("Woah! Relax! This command is on cooldown for 30 minute!");
    } else {
        let rety = args[0];
        if(!rety) return message.channel.send("No number specified!")
        const result = await fetch(`http://numbersapi.com/${rety}`).then(response => response.text());

        message.channel.send(`${result}`);
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 30000);
    }
        //error handler and listener
    const token = process.env.token;
    bot.on("error", () => { bot.login(token) });
    }
}

