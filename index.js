const Discord = require('discord.js')
const client = new Discord.Client()
const profanities = require('profanities')

client.on('ready', () => {
    client.user.setActivity("for bad words", { type: "WATCHING" })
    console.log("Ready!")
})

client.on('message', (message) => {
    if (message.author.bot || !message.guild) return
    if (message.member.hasPermission("ADMINISTRATOR")) return
    for (let i = 0; i < profanities.length; i++) {
        if (message.content.toLowerCase().includes(profanities[i].toLowerCase())) {
            message.delete()
            message.channel.send(`<@${message.author.id}>, LANGUAGE`)
            console.log(`${message.author.tag}: ${message.content}`)
            return
        }
    }
})

client.on('messageUpdate', (oldMessage, newMessage) => {
    if (newMessage.author.bot || !newMessage.guild) return
    if (newMessage.member.hasPermission("ADMINISTRATOR")) return
    for (let i = 0; i < profanities.length; i++) {
        if (newMessage.content.toLowerCase().includes(profanities[i].toLowerCase())) {
            newMessage.delete()
            newMessage.channel.send(`<@${newMessage.author.id}>, LANGUAGE`)
            console.log(`${newMessage.author.tag}: ${newMessage.content}`)
            return
        }
    }
})

client.login("")
