module.exports = {
    config: {
        name: `dadjoke`,
        aliases: [`djoke`]
    },
    run: async (bot, message, args) => {
        function doRandHT() {
            var rand = [
            ':crab: Why don’t crabs give to charity? Because they’re shellfish.', 
            ':calender: Can February March? No, but April May.', 
            ":construction: Want to hear a joke about construction? I'm still working on it.", 
            ":zombie: What does a zombie vegetarian eat? “GRRRAAAIINS!”", 
            "To the man in the wheelchair that stole my camouflage jacket... You can hide but you can't run.", 
            "Why did the scarecrow win an award? Because he was outstanding in his field.", 
            "Why don't skeletons ever go trick or treating? Because they have no body to go with.", 
            "What’s an astronaut’s favorite part of a computer? The space bar.", 
            "Did you hear about the scientist who was lab partners with a pot of boiling water? He had a very esteemed colleague.", 
            "I got hit by a can of soda. Luckily it was a soft drink", 
            "Why were the middle ages called the Dark ages? There were too many knights.", 
            "What happens when you fart in church? You sit on your own pew.", "What is wrong with this wood car? It wooden go.", 
            "How do you make holy water? You boil the hell out of it.", 
            "I bought some shoes from a drug dealer. I don't know what he laced them with, but I was tripping all day!", 
            "Did you know the first French fries weren't actually cooked in France? They were cooked in Greece.", 
            "If a child refuses to sleep during nap time, are they guilty of resisting a rest?", 
            "I'm reading a book about anti-gravity. It's impossible to put down!", 
            "What do you call someone with no body and no nose? Nobody knows.", 
            "When a dad drives past a graveyard: Did you know that's a popular cemetery? Yep, people are just dying to get in there!", 
            "Justice is a dish best served cold, if it were served warm it would be justwater.", 
            "The fattest knight at King Arthur’s round table was Sir Cumference. He acquired his size from too much pi.", "If you see a robbery at an Apple Store does that make you an iWitness?", 
            "What has two butts and kills people? An assassin", 
            "Don't trust atoms. They make up everything!", 
            "When you ask a dad if he's alright: \"No, I’m half left.”", 
            "How many tickles does it take to make an octopus laugh? Ten-tickles.", 
            "What did the buffalo say to his son when he dropped him off at school? Bison.",
            "What do you get when you cross an elephant with a rhino? Elephino.",
            'When you ask a dad if he\'s alright: \"No, I’m half left.\"',
            "A three-legged dog walks into a bar and says to the bartender, \"I’m looking for the man who shot my paw.\"",
            "Did you hear the news? FedEx and UPS are merging. They’re going to go by the name Fed-Up from now on.",
            "Did you hear about the circus fire? It was in tents!",
            "NURSE: \"Blood type?\" DAD: \"Red.\"",
            ]
            return rand[Math.floor(Math.random()*rand.length)];
            }
            const embed = {
                "description": doRandHT(),
                "color": "RANDOM",
                };
            message.channel.send({ embed });
                //error handler and listener
    const token = process.env.token;
    bot.on("error", () => { bot.login(token) });
    }
}
