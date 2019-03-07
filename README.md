SHARKS Discord Bot 
============
[![GitHub Stars](https://img.shields.io/github/stars/ColinLeesUK/discord-bot.svg)](https://github.com/IgorAntun/node-chat/stargazers) [![GitHub Issues](https://img.shields.io/github/issues/ColinLeesUK/discord-bot.svg)](https://github.com/IgorAntun/node-chat/issues) [![Current Version](https://img.shields.io/badge/version-1.0.0-green.svg)](https://github.com/IgorAntun/node-chat)

This is a node.js Discord bot powered by Discord.js that provides silly functions for our SHARKS Discord server, such as cat pictures, dog pictures, memes, etc.

---

## Features
Command | Args | Description |
--- | --- | --- |
!cat | - | Display a picture of a cat |
!dog | - | Display a picture of a dog |
!meme | - | Display a meme |
!serverinfo | - | Display information about the server |
!userinfo | - | Display information about the server |
!mute | [@user] [reason] | Mute a user in the server and give a reason |
!help | [command] | Show what commands are available and how to use them |

---

## Setup
Clone this repo and run `npm install` to install all the dependencies.

You will need to add `src/config.json` to change the command prefix and bot token.

---

## Usage
Once the dependencies are installed, you can run  `npm start` to start the bot.

If you want to run the bot in development mode, you can run `npm run start:dev` which will hot reload the bot using [nodemon](https://nodemon.io/)

---

## License

This project is licensed under the terms of the **MIT** license.
