const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
	.setName('reactrole')
	.setDescription('Manage a reaction role message')
	.addSubcommand(subcommand =>
		subcommand
			.setName('create')
			.setDescription('Create a reaction role message')
			.addChannelOption(option => option
				.setName('channel')
				.setDescription('Which channel should we post the message in?')
				.setRequired(true),
			)
			.addStringOption(option => option
				.setName('message')
				.setDescription('What should the message say?')
				.setRequired(true),
				// .addStringOption(option => option
				// 	.setName('emoji')
				// 	.setDescription('Which emoji should we react with?')
				// 	.setRequired(true)
			),
	);