/**
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
module.exports = {
    config: {
        name: `8ball`,
        aliases: []
    },
    run: async (bot, message, args) => {
      try{
        function doRandHT() {
            var rand = [":8ball: As I see it, yes.", ":8ball: Ask again later.", ":8ball: Better not tell you now.", ":8ball: Cannot predict now.", ":8ball: Concentrate and ask again.", ":8ball: Don’t count on it.", ":8ball: It is certain.", ":8ball: It is decidedly so.", ":8ball: Most likely.", ":8ball: My reply is no.", ":8ball: My sources say no.", ":8ball: Outlook not so good.", ":8ball: Outlook good.", ":8ball: Reply hazy, try again.", ":8ball: Signs point to yes.", ":8ball: Very doubtful.", ":8ball: Without a doubt.", ":8ball: Yes.", ":8ball: Yes – definitely.", ":8ball: You may rely on it."]
            return rand[Math.floor(Math.random()*rand.length)];
        }
        const embed = {
          description: doRandHT(),
          color: 16777215,
          }
          message.reply({embed}).catch(error => message.channel.send("Something went wrong!\nError code: `6`"))
              //error handler and listener
      } catch(error) {
        message.channel.send("Something went wrong!")
        console.log(error)
        bot.channels.get('806244787191414824').message.channe.send(`${error}`)
      }
    }
}
