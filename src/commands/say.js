export async function run(client, message, args) {
  if (!message.member.hasPermission(['MANAGE_MESSAGES', 'ADMINISTRATOR'])) {
    return message.channel.send('I can\'t do that Hal');
  }

  let argsResult;
  const mChannel = message.mentions.channels.first();

  message.delete();

  if (mChannel) {
    argsResult = args.slice(1).join(' ');
    return mChannel.send(argsResult);
  }

  argsResult = args.join(' ');
  return message.channel.send(argsResult);
}

export const config = {
  name: 'say',
  description: 'Send a message to a channel.',
  usage: '!say <#channel> <content>',
  accessibleby: 'Members',
  aliases: ['ann', 'announcement'],
};
