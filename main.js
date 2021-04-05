const Discord = require('discord.js');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
module.exports = {
    cliente : client
}
//const prefix = '-';
const xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.open('GET', 'https://api.tibiadata.com/v2/characters/abacato.json', true);

//https://api.tibiadata.com/v2/characters/${command}.jsonhttp://localhost/flowers.jpg

client.once('ready', () => {
    console.log('BotCelo is Oline');

});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    var args = message.content.slice(prefix.lenght).split(/ +/);
    
    var command = args[0]
    console.log(command)
    if (command.startsWith('!level')){
        args = args.slice(1)
        args = args.join(' ')
        args = args.substring()
        console.log(args)
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        var req = `https://api.tibiadata.com/v2/characters/${args}.json`
        console.log(req)
        xhr.open('GET', `https://api.tibiadata.com/v2/characters/${args}.json`, true);
        xhr.onload = function(e) {
            if (this.status == 200 && this.readyState==4) {
                const data = (this.status);
                let x = JSON.parse(this.responseText);
                console.log(x.characters.data.level)
                if(x.characters.data.level){
                    message.channel.send(`O level desse char é: ${x.characters.data.level}`);
                }
                else{
                    message.channel.send('não existe char com esse nome');
                }
                
            }
        };
        xhr.send();
    }
    if (message.content === `${prefix}ping`) {
        message.channel.send('Pong.');
    } else if (message.content === `${prefix}beep`) {
        message.channel.send('Boop.');
    }


    else if (message.content === `${prefix}server`) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    }

    else if (message.content === `${prefix}user-info`) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    }
});



//client.login('ODI2MTMzOTEwOTk0OTQ0MTEx.YGIDKQ.C8olp-RPR8OON8j37tzVhcwGrZk');
client.login(token);


