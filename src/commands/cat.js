import { RichEmbed } from 'discord.js';
import { get } from 'superagent';
import { cyan } from '../colors.json';

export async function run(client, message) {
  const msg = await message.channel.send('Generating...');

  const { body } = await get('http://aws.random.cat/meow');

  if ({ body } === undefined) {
    return message.channel.send('I broke! Please try again.');
  }

  const embed = new RichEmbed()
    .setColor(cyan)
    .setAuthor('Testbot', message.guild.iconURL)
    .setImage(body.file)
    .setTimestamp()
    .setFooter('Testbot', client.user.displayAvatarURL);

  message.channel.send(embed);
  return msg.delete();
}

export const config = {
  name: 'cat',
  aliases: [],
};
