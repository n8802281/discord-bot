const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const ytdl = require('ytdl-core');
client.on("ready", () =>{
  console.log("Here we go!");
  client.user.setActivity(" ",{type: "LISTENING"})
});

let queue = {};
queue.playing = false;
queue.songs = [];

client.on("message", (message) =>{
  if (!message.content.startsWith(config.musicbotprefix) || !message.author.bot)
    return;
  const args = message.content.slice(config.musicbotprefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  message.delete();

  if (command === 'join'){
    var userID = args[0];
    if (message.guild.members.get(userID).voiceChannel){
      message.guild.members.get(userID).voiceChannel.join()
        .then(connection =>{
          message.channel.send("成功加入頻道");
        })
        .catch(console.log);
    }else{
      message.channel.send("請先加入一個語音頻道")
    }
  }
  if (command === 'leave'){
    var userID = args[0];
    if (message.guild.voiceConnection){
      message.guild.voiceConnection.disconnect();
    }else{
      message.channel.send("人都沒來再趕三小==")
    }
  }
  if (command === 'add'){
    var userID = args[0];
    let url = args[1];
    if (url == '' || url === undefined) return;
    ytdl.getInfo(url, (err, info) => {
			if(err) return message.channel.send('Invalid YouTube Link: ' + err);
			queue.songs.push({url: url, title: info.title, requester: message.guild.members.get(userID).username});
			message.channel.send(`added **${info.title}** to the queue`);
		});
  }
  if (command === 'play') {
    var userID = args[0];
		if (!message.guild.voiceConnection) message.guild.members.get(userID).voiceChannel.join();
		let dispatcher;
		queue.playing = true;
    console.log(queue);
		(function play(song) {
			console.log(song);
			if (song === undefined) return message.channel.send('Queue is empty').then(() => {
				queue.playing = false;
				message.guild.members.get(userID).voiceChannel.leave();
			});
			message.channel.send(`Playing: **${song.title}** as requested by: **${song.requester}**`);
			dispatcher = message.guild.voiceConnection.playStream(ytdl(song.url, { audioonly: true }), { passes : 4 });
			let collector = message.channel.createCollector(m => m);
			collector.on('message', m => {
        if (m.author.bot || m.content.startsWith(config.musicbotprefix2)){
          var argS = m.content.slice(config.musicbotprefix2.length).trim().split(/ +/g);
          var commanD = argS.shift().toLowerCase();
          m.delete();
  				if (commanD == 'pause') {
  					message.channel.send('paused');
            dispatcher.pause();
  				}
          else if (commanD == 'resume'){
  					message.channel.send('resumed');
            dispatcher.resume();
  				}
          else if (commanD == 'skip'){
  					message.channel.send('skipped');
            dispatcher.end();
  				}
          else if (commanD == 'setvolume'){
            let vv = argS[0];
            if(vv>=0 && vv<=1 ) {
              config.vol=vv;
              dispatcher.setVolume(vv);
              message.channel.send("成功將音量設為" + vv);
            }else{
              message.channel.send("0~1好爆==  " + vv + "是三小");
            }
  				}
          else if (commanD == 'time'){
  					message.channel.send(`time: ${Math.floor(dispatcher.time / 60000)}:${Math.floor((dispatcher.time % 60000)/1000) <10 ? '0'+Math.floor((dispatcher.time % 60000)/1000) : Math.floor((dispatcher.time % 60000)/1000)}`);
  				}
        }
			});
			dispatcher.on('end', () => {
				collector.stop();
				play(queue.songs.shift());
			});
			dispatcher.on('error', (err) => {
				return message.channel.send('error: ' + err).then(() => {
					collector.stop();
					play(queue.songs.shift());
				});
			});
		})(queue.songs.shift());
  }
});
client.login(config.musicbottoken);
