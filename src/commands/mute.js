import { pink } from '../colors.json';

export async function run(client, message, args) {
  if (!message.member.hasPermission('MANAGE_ROLES') || !message.guild.owner) {
    return message.channel.send('You have no power here...');
  }

  if (!message.guild.me.hasPermission(['MANAGE_ROLES', 'ADMINISTRATOR'])) {
    return message.channel.send('I can\'t do that hal...');
  }

  const mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
  if (!mutee) {
    return message.channel.send('Please specify who you wish to mute.');
  }

  let reason = args.slice(1).join(' ');

  if (!reason) {
    reason = 'No reason given (Someone just doesn\'t like you)';
  }

  let muterole = message.guild.roles.find(_ => _.name === 'Muted');

  if (!muterole) {
    try {
      muterole = await message.guild.createRole({
        name: 'Muted',
        color: pink,
        permissions: [],
      });

      message.guild.channels.forEach(async (channel) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false,
          SEND_TTS_MESSAGES: false,
          ATTACH_FILES: false,
          SPEAK: false,
        });
      });
    } catch (e) {
      console.log(e.stack);
    }
  }

  return mutee.addRole(muterole.id).then(() => {
    message.delete();
    mutee.send(`Hello, you have been muted in ${message.guild.name} for: ${reason}`);
    message.channel.send(`${mutee.user.username} has been muted by ${message.author.username} for: ${reason}`);
  });
}

export const config = {
  name: 'mute',
  description: 'Mutes a member in the discord server.',
  usage: '!mute <@user> <reason>',
  accessibleby: 'Members',
  aliases: ['m', 'nospeak'],
};
