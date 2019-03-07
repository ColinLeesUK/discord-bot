export default (client) => {
  console.log(`${client.user.username} is online!`);

  const statusArray = [
    '!help',
    `over ${client.users.size} users`,
  ];

  return setInterval(() => {
    const status = statusArray[Math.floor(Math.random() * statusArray.length)];

    client.user.setActivity(status, { type: 'WATCHING' });
  }, 5000);
};
