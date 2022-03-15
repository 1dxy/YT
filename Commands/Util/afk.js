const { CommandInteraction, MessageEmbed, Message } = require('discord.js');
const afkSchema = require('../../Models/afk');

module.exports = {
    name: 'afk',
    description: 'Set yourself afk',
    options: [
        {
            name: 'reason',
            description: 'Reasoning of going afk',
            type: 'STRING',
            required: false
        }
    ], 
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Message} message 
     */
    async execute(interaction, message) {
        const reason = interaction.options.getString('reason') || 'No reason'
        
        const params = {
            Guild: interaction.guild.id,
            User: interaction.user.id
        }

        afkSchema.findOne({params}, async(err, data) => {
            if(err)
            throw err;
            if(data) {
                data.delete()
                interaction.reply({content: `${interaction.user} you are no longer afk`, ephemeral: true})
            } else {
                new afkSchema({
                    Guild: interaction.guild.id,
                    User: interaction.user.id,
                    Reason: reason,
                    Date: Date.now()
                }).save();
                interaction.reply({content: `🟡 You are now AFK for \`${reason}\``, ephemeral: true})
            }
        })
    }
}