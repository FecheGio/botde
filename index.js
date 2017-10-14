const Discord = require('discord.js');
const bot = new Discord.Client();

var regex = /@Botde ([a-z]| |[A-Z])*/g;

bot.on('message', (message) => {

  var botReply = ['hola, humano',
                  'que tal, humano?',
                  'estás seguro que queres seguir con el asunto?']

  if(message.content == 'Hola' || message.content == 'hola'){

    message.reply(botReply[(Math.floor(Math.random()*3))]);

  }

});

bot.login(<SECRET KEY>)
