const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core')
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAt8wdg-YuArRHtKWK05In0VYmQwQMamaM');
const prefix = '.'

client.on('message', async message => {
    let splitMessage = message.content.split(' ');

    if (splitMessage[0] === prefix+'play') {

        if (message.member.voice.channel) {

            if (splitMessage.length === 2) {
                const connection = await message.member.voice.channel.join();
                youtube.searchVideos(splitMessage[1], 1)
                    .then(results => {
                        console.log(`${results[0].url}`)
                        const plmusic = connection.play(ytdl(`${results[0].url}`, { filter: 'audioonly' }))
                        const embed = new MessageEmbed()
                        .setTitle('Lied wird abgespielt')
                        .setColor(0x03fc67)
                        .setDescription(splitMessage[1]+' wird abgespielt')
                        message.channel.send(embed)

                        client.on('message', msg => {
                            if (msg.content === prefix+'pause') {
                              plmusic.pause();
                              const embed = new MessageEmbed()
                              .setTitle('Pausiert')
                              .setColor(0x03fc67)
                              .setDescription('Das Lied wurde pausiert')
                              message.channel.send(embed)
                            }
                            
                        });

                        client.on('message', msg => {
                            if (msg.content === prefix+'resume') {
                              plmusic.resume();
                              const embed = new MessageEmbed()
                              .setTitle('Fortgesetzt')
                              .setColor(0x03fc67)
                              .setDescription('Das Lied wird fortgesetzt')
                              message.channel.send(embed)
                            }
                            
                        });
        
                    })
                        
                    .catch(console.error);
            }

        }
    }

});

client.login('Njk3NTM2ODEyNTg2ODkzMzYz.XqM2pg.XhJ939j3_3z0-aGDyAJvZzD2Vy0');
