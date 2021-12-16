const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kill')
		.setDescription('Kills the Bot!'),
	async execute(interaction) {
		await interaction.reply('Killing bot!');
		await interaction.reply({ content: 'Ping!', ephemeral: true });
	},
};