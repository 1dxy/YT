const { Client, MessageEmbed, Collection } = require('discord.js');
const client = new Client({ intents: 32767 });
const { Token, Database } = require('./config.json')
const mongoose = require("mongoose")

client.commands = new Collection()

require("./Handlers/Events")(client);
require("./Handlers/Commands")(client);

client.login(Token);