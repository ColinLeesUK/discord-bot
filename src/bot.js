import { Client, Collection } from 'discord.js';
import { readdir } from 'fs';
import { prefix, name, token } from './config.json';

const client = new Client();

client.on('ready', async () => {
  console.log(`${client.user.username} is online!`);
  return client.user.setActivity('you', { type: 'WATCHING' });
});

client.commands = new Collection();
client.aliases = new Collection();

readdir('./src/commands', (err, files) => { // eslint-disable-line global-require
  if (err) {
    return console.log('[LOGS] Couldn\'t load commands:\n', err);
  }

  const jsfile = files.filter(f => f.split('.').pop() === 'js');
  if (jsfile.length === 0) {
    return console.log('[LOGS] Couldn\'t find Commands');
  }

  return jsfile.forEach((f) => {
    import(`./commands/${f}`) // eslint-disable-line
      .then((file) => {
        client.commands.set(file.config.name, file);
        file.config.aliases.forEach((alias) => {
          client.aliases.set(alias, name);
        });
      });
  });
});

client.on('message', async (message) => {
  if (message.channel.type === 'dm') {
    return;
  }

  const messageArray = message.content.split(' ');
  const cmd = messageArray[0];
  const args = messageArray.slice(1);

  if (!message.content.startsWith(prefix)) {
    return;
  }

  const commandFile = client.commands.get(cmd.slice(prefix.length))
                   || client.commands.get(client.aliases.get(cmd.slice(prefix.length)));

  if (commandFile) {
    commandFile.run(client, message, args);
  }
});

client.login(token);
