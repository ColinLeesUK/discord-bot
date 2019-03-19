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

  const muterole = message.guild.roles.find(r => r.name === 'Muted');
  if (!muterole) {
    return message.channel.send('There is no mute role to remove');
  }

  return mutee.removeRole(muterole.id).then(() => {
    message.delete();
    mutee.send(`Hello, you have been unmuted in ${message.guild.name} for: ${reason}`).catch(err => console.log(err));
    message.channel.send(`${mutee.user.username} was unmuted.`);
  });
}

export const config = {
  name: 'unmute',
  description: 'Unmutes a member in the discord server.',
  usage: '!unmute <@user> <reason>',
  accessibleby: 'Members',
  aliases: ['um', 'speak'],
};
