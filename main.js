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
                youtube.searchVideos(splitMessage[1], 8)
                    .then(results => {
                        const embed = new MessageEmbed()
                        .setTitle('Zuur auswahl stehend')
                        .setColor(0x03fc67)
                        .setDescription(`**1**: ${results[0].title} \n **2**: ${results[1].title} \n **3**: ${results[2].title} \n **4**: ${results[3].title} \n **5**: ${results[4].title} \n **6**: ${results[5].title} \n **7**: ${results[6].title} \n **8**: ${results[7].title}`)
                        message.channel.send(embed)
                        message.channel.awaitMessages(msg => {
                            if (msg.content === "1") {
                                const plmusic = connection.play(ytdl(`${results[0].url}`, { filter: 'audioonly' }))
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
                            }
                            if (msg.content === "2") {
                                const plmusic = connection.play(ytdl(`${results[1].url}`, { filter: 'audioonly' }))
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
                            }
                            if (msg.content === "3") {
                                const plmusic = connection.play(ytdl(`${results[2].url}`, { filter: 'audioonly' }))
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
                            }
                            if (msg.content === "4") {
                                const plmusic = connection.play(ytdl(`${results[3].url}`, { filter: 'audioonly' }))
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
                            }
                            if (msg.content === "5") {
                                const plmusic = connection.play(ytdl(`${results[4].url}`, { filter: 'audioonly' }))
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
                            }
                            if (msg.content === "6") {

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
                                    
                                });                            }
                            if (msg.content === "7") {
                                const plmusic = connection.play(ytdl(`${results[5].url}`, { filter: 'audioonly' }))
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
                            }
                            if (msg.content === "8") {
                                const plmusic = connection.play(ytdl(`${results[7].url}`, { filter: 'audioonly' }))
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
    }

    else {
        const embed = new MessageEmbed()
        .setTitle('Fehler')
        .setColor(0x03fc67)
        .setDescription('Du musst dich in einem Sprach Kanal befinden')
        message.channel.send(embed)
    }

});

client.login('Njk3NTM2ODEyNTg2ODkzMzYz.XqM2pg.XhJ939j3_3z0-aGDyAJvZzD2Vy0');
