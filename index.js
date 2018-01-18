const cowsay = require("cowsay")

setInterval( () => console.log( cowsay.say({text: 'test'}) ), 1000)
