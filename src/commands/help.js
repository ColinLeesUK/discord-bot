import { RichEmbed } from 'discord.js';
import { prefix } from '../config.json';
import { cyan, pink } from '../colors.json';

module.exports.run = async (client, message, args) => {
  if (args[0] === 'help') {
    return message.channel.send(`Just do ${prefix}help instead`);
  }

  if (args[0]) {
    let command = args[0];

    if (!client.commands.has(command)) {
      return console.log('[LOGS] Couldn\'t find command:\n', command);
    }

    command = client.commands.get(command);

    return message.channel.send(new RichEmbed()
      .setColor(cyan)
      .setAuthor('TestBOT help', message.guild.iconURL)
      .setThumbnail(client.user.displayAvatarURL)
      .setDescription(`The bot prefix is: ${prefix}
                  \n\n**> Command:** ${command.config.name}
                  \n**> Description:** ${command.config.description || 'No description'}
                  \n**> Usage:** ${command.config.usage || 'No usage'}
                  \n**> Accessible by:** ${command.config.accessibleby || 'Members'}
                  \n**> Aliases:** ${command.config.noalias || command.config.aliases}`));
  }

  message.channel.send(new RichEmbed()
    .setColor(pink)
    .setAuthor('Help command', message.guild.iconURL)
    .setDescription(`${message.author.username} check your DMs!`));

  return message.channel.send(new RichEmbed()
    .setColor(cyan)
    .setAuthor('TestBOT Help', message.guild.iconURL)
    .setThumbnail(client.user.displayAvatarURL)
    .setDescription(`These are the aviable commands for the TestBOT!\nThe bot prefix is: ${prefix}`)
    .addField('Commands:', client.commands.map(c => `\`\`${c.config.name}\`\``))
    .setFooter('TestBOT', client.user.displayAvatarURL))
    .then(_ => _.delete(10000));
};

module.exports.config = {
  name: 'help',
  aliases: [],
  usage: '!help {command}',
  description: '',
  noalias: 'No aliases',
  accessibility: 'Members',
};
