module.exports = {
    name: 'clear',
    description: 'clears messages yes',
    async execute(message, args) {

        if(message.member.roles.cache.has('937674214108958780')){

        if(!args[0]) return message.reply("how much messages dipshit");
        if(isNaN(args[0])) return message.reply("A NUMBER YOU DUMBASS");

        if(args[0] > 100) return message.reply("god damn, less then 100 please..");
        if(args[0] < 1) return message.reply("so we have 0 and less messages now, fucking idiot");

        await message.channel.messages.fetch({limit: ++args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);  });

        } else {
            message.channel.send('low rank little shit');
        } 
    }
}