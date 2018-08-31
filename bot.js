const Discord = require('discord.js')
const auth = require('./auth.json')
const config = require('./config.json')

const bot = new Discord.Client()

bot.on('ready', function(evt) {
  console.log('Connected')
  console.log('Logged in as: ')
  console.log(bot.username + ' - (' + bot.id + ')')
})

bot.on('message', function(user, userID, channelID, message, evt) {
  if (message.substring(0, 1) == config.prefix) {
    let args = message.substring(1).split(' ')
    const cmd = args[0]

    args = args.splice(1)

    switch (cmd) {
      case 'ping':
        bot.sendMessage({ to: channelID, message: 'Pong!' })
        break
      default:
        bot.sendMessage({ to: channelID, message: 'Unknown command.' })
    }
  }
})

bot.login(auth.token)
