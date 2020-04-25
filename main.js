const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core')
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('YT Token');
const prefix = '.'

let plmusic;

client.on('message', async message => {
    let splitMessage = message.content.split(' ');
    const searchString = splitMessage.slice(1).join(' ');

    if (splitMessage[0] === prefix+'play') {

        if (message.member.voice.channel) {

            if (splitMessage.length > 1) {
                const connection = await message.member.voice.channel.join();
                youtube.searchVideos(searchString, 8)
                    .then(results => {
                        const embed = new MessageEmbed()
                        .setTitle('Zuur auswahl stehend')
                        .setColor(0x03fc67)
                        .setDescription(`**1**: ${results[0].title} \n **2**: ${results[1].title} \n **3**: ${results[2].title} \n **4**: ${results[3].title} \n **5**: ${results[4].title} \n **6**: ${results[5].title} \n **7**: ${results[6].title} \n **8**: ${results[7].title} \n \n Sende eine Nachricht mit der entsprechenden Nummer`)
                        message.channel.send(embed)
                        message.channel.awaitMessages(msg => {
                            if (msg.content === "1") {
                                plmusic = connection.play(ytdl(`${results[0].url}`, { filter: 'audioonly' }))
                            }
                            if (msg.content === "2") {
                                plmusic = connection.play(ytdl(`${results[1].url}`, { filter: 'audioonly' }))
                            }
                            if (msg.content === "3") {
                                plmusic = connection.play(ytdl(`${results[2].url}`, { filter: 'audioonly' }))
                            }
                            if (msg.content === "4") {
                                plmusic = connection.play(ytdl(`${results[3].url}`, { filter: 'audioonly' })) 
                            }
                            if (msg.content === "5") {
                                plmusic = connection.play(ytdl(`${results[4].url}`, { filter: 'audioonly' }))
                            }
                            if (msg.content === "6") {
                                plmusic = connection.play(ytdl(`${results[5].url}`, { filter: 'audioonly' }))
                            }
                            if (msg.content === "7") {
                                plmusic = connection.play(ytdl(`${results[6].url}`, { filter: 'audioonly' }))
                            }
                            if (msg.content === "8") {
                                plmusic = connection.play(ytdl(`${results[7].url}`, { filter: 'audioonly' }))
                                
                            }

                            

                        })


                    })
                        
                    .catch(console.error);

            }

            if (splitMessage.length === 1) {
                const embed = new MessageEmbed()
                .setTitle('Fehler')
                .setColor(0x03fc67)
                .setDescription('Du musst etwas mit angeben')
                message.channel.send(embed)
            }

        }

        else {
            const embed = new MessageEmbed()
            .setTitle('Fehler')
            .setColor(0x03fc67)
            .setDescription('Du musst dich in einem Sprach Kanal befinden')
            message.channel.send(embed)
        }

    }


});

client.on('message', msg => {
    if (msg.content === prefix+'pause') {
      plmusic.pause();
      const embed = new MessageEmbed()
      .setTitle('Pausiert')
      .setColor(0x03fc67)
      .setDescription('Das Lied wurde pausiert')
      msg.channel.send(embed)
    }
    
});

client.on('message', msg => {
    if (msg.content === prefix+'resume') {
      plmusic.resume();
      const embed = new MessageEmbed()
      .setTitle('Fortgesetzt')
      .setColor(0x03fc67)
      .setDescription('Das Lied wird fortgesetzt')
      msg.channel.send(embed)
    }
    
});

client.login('Discord Token');
