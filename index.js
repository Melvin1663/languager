const Discord = require('discord.js')
const client = new Discord.Client()
const profanities = require('profanities')

client.on('ready', () => {
    client.user.setActivity("for bad words", { type: "WATCHING" })
    console.log("Ready!")
})

client.on('message', (message) => {
    if (message.member.hasPermission("ADMINISTRATOR")) return
    for (let i = 0; i < profanities.length; i++) {
        if (message.content.toLowerCase().includes(profanities[i].toLowerCase())) {
            message.delete()
            message.channel.send(`<@${message.author.id}>, LANGUAGE`).then(m => m.delete({ timeout: 5000 }))
            console.log(`${message.author.tag}: ${message.content}`)
            return
        }
    }
})

client.on('messageUpdate', (oldMessage, newMessage) => {
    if (newMessage.member.hasPermission("ADMINISTRATOR")) return
    for (let i = 0; i < profanities.length; i++) {
        if (newMessage.content.toLowerCase().includes(profanities[i].toLowerCase())) {
            newMessage.delete()
            newMessage.channel.send(`<@${newMessage.author.id}>, LANGUAGE`).then(m => m.delete({ timeout: 5000 }))
            console.log(`${newMessage.author.tag}: ${newMessage.content}`)
            return
        }
    }
})

client.login("ODI3NzkxNjE2Mjc3NzQxNjI4.YGgLBA.lHo2r-JDBf917-iMOsnKErU7iRE")
