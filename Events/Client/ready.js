const { MessageEmbed } = require('discord.js')
const { Database } = require('../../config.json')
const mongoose = require("mongoose")

module.exports = {
    name: "ready",
    once: true,
    execute(client) {
        console.log("Logged into Frost Bot.")
    const botOn = new MessageEmbed()
      .setTitle("Bot is on!")
      .setDescription("✅ I am now online and active")
      .setColor("GREEN")
      .setFooter("Frost Client")
      .setTimestamp()
    client.user.setActivity("test", {type: "WATCHIING"})

    if (!Database) return;
    mongoose.connect(Database, {
    }).then(() => {
        console.log("The client is now connected to the database")
    }).catch((err) => {
        console.log(err)
    })
    }
}