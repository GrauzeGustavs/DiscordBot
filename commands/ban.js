module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args){

        if(message.member.roles.cache.has('937674214108958780')){
           const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("banished to Brazil");
        }else{
            message.channel.send(`enter the user you fucking idiot`);
        } 
        }
        
        else{
            message.channel.send('too low rank pathetic mongrel');
        }
    }
}