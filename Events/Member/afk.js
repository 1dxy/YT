const { Message, MessageEmbed } = require('discord.js');
const Schema = require('../../Models/afk');

module.exports = {
    name: 'messageCreate',
    /**
     * 
     * @param {Message} message 
     */
    async execute(message) {
        if(message.author.bot) return;


        const checkafk = await Schema.findOne({Guild: message.guild.id, User: message.author.id})
    
        if(checkafk) {
            checkafk.delete()
    
            const dataDeletedEmbed = new MessageEmbed()
            .setDescription(` You are no longer AFK!`)
            .setColor('BLUE')
    
    
            message.channel.send({embeds: [dataDeletedEmbed]})
        }
    
        const mentionedUser = message.mentions.users.first();
        if(mentionedUser) {

           const data = await Schema.findOne({Guild: message.guild.id, User: mentionedUser.id})
    
            if(data) {
                const embed = new MessageEmbed()
                .setTitle(`🟡 ${mentionedUser.username} is currently AFK!`)
                .setColor('YELLOW')
                .setDescription(`Reason: ${data.Reason} \n Since: <t:${Math.round(data.Date / 1000)}:R>`)
    
                message.channel.send({embeds: [embed]})
            }
        }
    }
}