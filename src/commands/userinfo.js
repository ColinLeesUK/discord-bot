import { RichEmbed } from 'discord.js';
import { cyan } from '../colors.json';

export async function run(client, message) {
  const embed = new RichEmbed()
    .setColor(cyan)
    .setTitle('User info')
    .setAuthor(`${message.author.username}'s info`, message.author.displayAvatarURL)
    .setThumbnail(message.author.avatarURL)
    .addField('**Username:**', `${message.author.username}`, true)
    .addField('**Discriminator:**', `${message.author.discriminator}`, true)
    .addField('**ID:**', `${message.author.id}`, true)
    .addField('**Status:**', `${message.author.presence.status}`, true)
    .addField('**Created at:**', `${message.author.createdAt}`, true)
    .setFooter('TestBot | Footer', client.user.displayAvatarURL);

  message.channel.send({ embed });
}

export const config = {
  name: 'userinfo',
  aliases: [],
  usage: '!userinfo',
  description: 'Display information about the user',
  noalias: 'No aliases',
  accessibility: 'Members',
};
