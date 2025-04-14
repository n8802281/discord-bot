const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
client.on("ready", () =>{
  console.log("Here we go!");
  client.user.setActivity("  請在#testobj1下指令",{type: "LISTENING"})
});

let avalonset = {};
avalonset.nowplaying = true;
avalonset.nowregistering = false;
avalonset.players = [];
avalonset.phase = 0;//0 == notplaying 1 == register 2==assign 3==runingmission
avalonset.round = 0;
avalonset.sucessround=0;

client.on("message", (message) =>{
  if(message.author.id != config.ownerID)
    if (message.channel.name != config.commandchannelname)
      return;
  if (!message.content.startsWith(config.certerbotprefix) || message.author.bot)
    return;
  if(message.author.id == config.ownerID){
    message.channel.send("hello my owner");
  }else{
    message.channel.send("Hi" + client.users.get(message.author.id) + "! \n precessing your command...")
  }

  const args = message.content.slice(config.certerbotprefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  //avalon

  if (command === 'avalonstart'){
    //!!avalon++
    //!!avalonstop
    // 1.
    if(avalonset.nowplaying = false){
      avalonset.nowplaying = true;
      let collector = message.channel.createCollector(m => m);
      collector.on('message', m => {
        if (m.content.startsWith(config.avalonprefix)){

          var argS = m.content.slice(config.avalonprefix.length).trim().split(/ +/g);
          var commanD = argS.shift().toLowerCase();
          m.delete();

          avalonset.nowregistering = true;
          if (commanD === '++') {
          if(nowregistering){}
        }

        }
    });
  }


  }





  //start of the music playing part.
  if (command === 'join'){
    if (message.guild.members.get(config.musicbotID) != undefined && message.guild.members.get(config.musicbotID).presence.status == "online")
      message.channel.send(config.musicbotprefix + "join " + message.author.id);
  }
  if (command === 'leave'){
    if (message.guild.members.get(config.musicbotID) != undefined && message.guild.members.get(config.musicbotID).presence.status == "online")
      message.channel.send(config.musicbotprefix + "leave " + message.author.id);
  }
  if (command === 'add'){
    let url = args[0];
    if (message.guild.members.get(config.musicbotID) != undefined && message.guild.members.get(config.musicbotID).presence.status == "online")
      message.channel.send(config.musicbotprefix + "add " + message.author.id + " " +url);
  }
  if (command === 'play') {
    if (message.guild.members.get(config.musicbotID) != undefined && message.guild.members.get(config.musicbotID).presence.status == "online")
      message.channel.send(config.musicbotprefix + "play " + message.author.id);
  }
  if (command === 'pause') {
    if (message.guild.members.get(config.musicbotID) != undefined && message.guild.members.get(config.musicbotID).presence.status == "online")
      message.channel.send(config.musicbotprefix2 + "pause ");
  }
  if (command === 'resume') {
    if (message.guild.members.get(config.musicbotID) != undefined && message.guild.members.get(config.musicbotID).presence.status == "online")
      message.channel.send(config.musicbotprefix2 + "resume ");
  }
  if (command === 'skip') {
    if (message.guild.members.get(config.musicbotID) != undefined && message.guild.members.get(config.musicbotID).presence.status == "online")
      message.channel.send(config.musicbotprefix2 + "skip ");
  }
  if (command === 'setvolume') {
    let vv = args[0];
    if (message.guild.members.get(config.musicbotID) != undefined && message.guild.members.get(config.musicbotID).presence.status == "online")
      message.channel.send(config.musicbotprefix2 + "setvolume " + vv);
  }
  if (command === 'time') {
    if (message.guild.members.get(config.musicbotID) != undefined && message.guild.members.get(config.musicbotID).presence.status == "online")
      message.channel.send(config.musicbotprefix2 + "time ");
  }
  //end of the music playing part.
  if (command === 'ss'){
    if(message.member.voiceChannel){
      message.member.voiceChannel.join()
        .then(connection =>{
          const dispatcher = connection.playFile("./audiofile/gachi/Fuckingslavesgetyourassbackhere.mp3");
          dispatcher.on("end", end =>{
            message.member.voiceChannel.leave();
          });
        })
        .catch(console.log);
    }else{
      message.reply("slave go join a fucking voice channel first!")
    }
  }
  if (command === 'fuck'){
    var type = args[0];
    if(message.member.voiceChannel){
      message.member.voiceChannel.join()
        .then(connection =>{
          message.reply("I will show you who's tho boss of the gym!");
          const dispatcher = connection.playFile("./audiofile/gachi/fuckyou" + type + ".mp3");
          dispatcher.on("end", end =>{
            message.member.voiceChannel.leave();
          });
        })
        .catch(console.log);
    }else{
      message.reply("slave go join a fucking voice channel first!")
    }
  }
  if (command === 'woo'){
    if(message.member.voiceChannel){
      message.member.voiceChannel.join()
        .then(connection =>{
          message.reply("I will show you who's tho boss of the gym!");
          const dispatcher = connection.playFile("./audiofile/gachi/wooo.mp3");
          dispatcher.on("end", end =>{
            message.member.voiceChannel.leave();
          });
        })
        .catch(console.log);
    }else{
      message.reply("slave go join a fucking voice channel first!")
    }
  }
  if (command === 'ddf'){
    if(message.member.voiceChannel){
      message.member.voiceChannel.join()
        .then(connection =>{
          message.reply("I will show you who's tho boss of the gym!");
          const dispatcher = connection.playFile("./audiofile/gachi/deep.mp3");
          dispatcher.on("end", end =>{
            message.member.voiceChannel.leave();
          });
        })
        .catch(console.log);
    }else{
      message.reply("slave go join a fucking voice channel first!")
    }
  }
  if (command === 'rrr'){
    var type = args[0];
    if(message.member.voiceChannel){
      message.member.voiceChannel.join()
        .then(connection =>{
          message.reply("I will show you who's tho boss of the gym!");
          const dispatcher = connection.playFile("./audiofile/gachi/Orgasm" + type + ".mp3");
          dispatcher.on("end", end =>{
            message.member.voiceChannel.leave();
          });
        })
        .catch(console.log);
    }else{
      message.reply("slave go join a fucking voice channel first!")
    }
  }
  if (command === 'slave'){
    var name = args[0];
    let mem = message.guild.members.find(GuildMember => GuildMember.user.username === name);
    if(mem != null){
      mem.voiceChannel.join()
        .then(connection =>{
          message.reply("I will show you who's tho boss of the gym!");
          const dispatcher = connection.playFile("./audiofile/gachi/Fuckingslavesgetyourassbackhere.mp3");
          dispatcher.on("end", end =>{
            mem.voiceChannel.leave();
          });
        })
        .catch(console.log);
      }
  }
  if (command === 'pm'){
    var name = args[0];
    var content = args[1];
    let mem = message.guild.members.find(GuildMember => GuildMember.user.username === name);
    if(mem != null){
      mem.send(message.author.username + " send you a message:");
      mem.send(content);
      message.author.send("message sucessfully delivered");
      message.delete();
    }
  }

  if (command === '在啦幹'){
    if (message.guild.voiceConnection){
      message.guild.voiceConnection.disconnect();
    }else{
      message.reply("閉嘴==")
    }
  }
  if (command === '=='){
    if (message.guild.voiceConnection){
      message.guild.voiceConnection.disconnect();
    }else{
      message.channel.send("==\n==\n==\n==\n==\n==\n==\n==\n==\n==\n==");
    }
  }


});



client.login(config.certerbottoken);
