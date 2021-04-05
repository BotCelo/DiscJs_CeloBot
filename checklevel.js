const Discord = require('discord.js');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var main = require('main');

client = main.client

var charnames = ['Celo Brazil', 'Abacato', 'Paradoxo de Zeno']
var old_level = {'Celo Brazil': 0, 'Abacato': 0, 'Paradoxo de Zeno': 0};
function verify_level(){
        console.log('dcfad')
        charnames.forEach(function (item, index) {
        console.log(item)
        console.log(item, index);
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('GET', `https://api.tibiadata.com/v2/characters/${item}.json`, true);
        xhr.onload = function(e) {
            if (this.status == 200 && this.readyState==4) {
                const data = (this.status);
                let x = JSON.parse(this.responseText);
                console.log(x.characters.data.level)
                if(x.characters.data.level > x.characters.data.level){
                    message.channel.send(`O level desse char foi de ${old_level[item]} para ${x.characters.data.level}`);
                    old_level.item[item] = x.characters.data.level
                }
            }
        };
        xhr.send();
      });
      var intervalFunc = setInterval(() => verify_level(), 1);
      intervalFunc()
      clearInterval(intervalFunc);