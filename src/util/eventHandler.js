const reqEvent = event => require(`./events/${event}`);

export default (client) => {
    client.on('ready', () => {
        reqEvent('ready').default(client);
    });

    client.on('reconnection', () => {
        reqEvent('reconnecting').default(client);
    });

    client.on('disconnect', () => {
        reqEvent('disconnect').default(client);
    });

    client.on('warn', () => {
        reqEvent('warn')
    });

    client.on('error', () => {
        reqEvent('error')
    });
}