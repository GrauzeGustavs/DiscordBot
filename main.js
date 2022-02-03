const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const prefix = '';

const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}

client.once('ready', () => {
    console.log('I have come to insult Rymo!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if(command == 'facts'){
        client.commands.get('facts').execute(message, args);
    } else if(command == 'facts2'){
        client.commands.get('facts2').execute(message, args);
    } else if(command == 'facts3'){
        client.commands.get('facts3').execute(message, args);
    } else if(command == 'facts4'){
        client.commands.get('facts4').execute(message, args);
    } else if(command == 'facts5'){
        client.commands.get('facts5').execute(message, args);
    } else if(command == 'facts6'){
        client.commands.get('facts6').execute(message, args);
    } else if(command == 'facts7'){
        client.commands.get('facts7').execute(message, args);
    } else if(command == 'facts8'){
        client.commands.get('facts8').execute(message, args);
    } else if(command == 'facts9'){
        client.commands.get('facts9').execute(message, args);
    } else if(command == 'facts69'){
        client.commands.get('facts69').execute(message, args);
    } else if (command == 'clear') {
        client.commands.get('clear').execute(message, args);
    } else if (command == 'kick') {
        client.commands.get('kick').execute(message, args);
    } else if (command == 'ban') {
        client.commands.get('ban').execute(message, args);
    } else if(command == 'facts10'){
        client.commands.get('facts10').execute(message, args);
    } else if(command == 'facts11'){
        client.commands.get('facts11').execute(message, args);
    } else if(command == 'facts12'){
        client.commands.get('facts12').execute(message, args);
    } else if(command == 'facts13'){
        client.commands.get('facts13').execute(message, args);
    } else if(command == 'facts14') {
        client.commands.get('facts14').execute(message, args);
    }
    
});
client.login('OTM3NzU0OTU0Mzg1NDY5NTQy.YfgWWw.paZYUvmVmAWDIKwq0P4st12b3s0');