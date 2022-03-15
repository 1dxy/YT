const { CommandInteraction } = require('discord.js');

module.exports = {
    name: 'ping',
    description: "Ping",
    permission: "",
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    execute(interaction) {
        interaction.reply({content: "PONG"})
    }
}