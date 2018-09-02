const Discord = require('discord.js')
const auth = require('./auth.json')
const config = require('./config.json')

const bot = new Discord.Client()

bot.on('ready', function(evt) {
  console.log('Connected')
  console.log('Logged in as: ')
  console.log(bot.user.username + ' - (' + bot.user.id + ')')
})

bot.on('message', message => {
  if (message.content.substring(0, 1) == config.prefix) {
    let args = message.content.substring(1).split(' ')
    const cmd = args[0]

    args = args.splice(1)

    switch (cmd) {
      case 'ping':
        if (message.member.user.username === 'Lemming') {
          message.channel.send('Oh Herro!')
        } else {
          message.channel.send('Pong!')
        }
        break
      case 'avatar':
        message.channel.send(message.author.avatarURL)
        break
      default:
        message.channel.send("I'm sorry I didn't understand that...")
    }
  }
})

bot.on('voiceStateUpdate', (oldMember, newMember) => {
  let oldMemberChannel = oldMember.voiceChannel
  let newMemberChannel = newMember.voiceChannel
  console.log('Voice status update')

  if(oldMemberChannel === undefined && newMemberChannel !== undefined) {
    console.log('User ' + newMember.user.username + ' joined!')
    newMember.send('Oh Herro!')
  } else if(newMemberChannel === undefined){
    
  }
})

bot.login(auth.token)
