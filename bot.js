
const Discord = require('discord.js');
 
const bot = new Discord.Client();
 
const token = "Fuck off would you :)";
 
var prefix = '~';

bot.on("ready", function() {
      bot.user.setGame("ℓυѕт ~" , "https://www.twitch.tv/123silly");
    console.log(`Started bot as: ${bot.user.tag}!`);
});
 
bot.on("guildMemberAdd", function(member) {
let joinleaves = member.guild.channels.find("name","welcome");
if(!joinleaves) return;
joinleaves.sendMessage(member.toString() + " welcome to the server!");
 
if(!joinleaves) return;
 
});
 
bot.on("guildMemberRemove", function(member) {
 
let joinleaves = member.guild.channels.find("name","welcome");
 
if(!joinleaves) return;
 
joinleaves.send(member.toString() + " has left... We will miss you! :cry:");
});
 
bot.on("message", function(message) {
if (message.author.equals(bot.user)) return;
 
if (!message.content.startsWith(prefix)) return;
 
var args = message.content.substring(prefix.length).split(" ");
 
switch (args[0].toLowerCase()) {

case "help":
message.delete("help")
console.log(`Help message has been sent to <@${message.author.id}> !`)
message.channel.sendMessage(`<@${message.author.id}> -> **Commands List** has been sent to your pm/dm!`)
var embedt = new Discord.RichEmbed()
.setTitle("All Commands")
.setDescription('These Commands Will Help You!')
.setThumbnail ('https://cdn.discordapp.com/attachments/522239831393304582/559916034686058507/headpats_by_rebeccametrostory_dbo24uw-pre.jpg')
.addField(`~squad`, `:Shows Organization's squad members`)
.addField(`~say`, `Say Whatver You Said.`)
.addField(`~animesearch`, `Search The Anime You Like.`)
.addField(`~ban [user]`, `Bans A User.`)
.addField(`~kick [user]`, `Kicks A User.`)
.addField(`~mute [user]`, `Mutes A User.`)
.addField(`~umute [user]`, `Unmutes A User.`)
.setFooter("Latenci [Help]")
.setColor(0x1ab517)
message.author.sendEmbed(embedt)
break;
