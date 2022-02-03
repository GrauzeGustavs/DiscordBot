module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(message, args){

        if(message.member.roles.cache.has('937674214108958780')){
            const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("banished to the shadow realm");
        }else{
            message.channel.send(`enter the user you fucking idiot`);
        }
        } else {
            message.channel.send('pathetic low rank lmao')
        }
    }
}