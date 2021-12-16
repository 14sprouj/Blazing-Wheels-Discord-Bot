const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		console.time();
		console.log('Ping!');
		await interaction.reply('Pong!');
		console.timeEnd();
		console.log('Pong!');
	},
};