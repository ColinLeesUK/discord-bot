export default (client) => {
  console.log(`${client.user.username} is online!`);
  return client.user.setActivity('you', { type: 'WATCHING' });
};
