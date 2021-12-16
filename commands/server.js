const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Replies with Server Info!'),
	async execute(interaction) {
		// if (member.roles.cache.some(role => role.name === 'Mod') || member.roles.cache.some(role => role.name === 'Admin')) {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
		// } else {
		// await interaction.reply('You do not have permission to use this command.');
		// }
	},
};