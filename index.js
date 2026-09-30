const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
client.on('ready', () => { console.log(`Logged in as ${client.user.tag}!`); });
client.on('messageCreate', msg => { if (msg.content === '!ping') msg.reply('Pong! 😈 bot is online 24/7'); });
client.login(process.env.TOKEN);
