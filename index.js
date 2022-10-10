const dotenv = require('dotenv');
let discord = require('discord.js-selfbot-v13')
const keepAlive = require ('./server.js');
const config = require('./config.json');

let client = new discord.Client({
  checkUpdate: false,
});

client.on("ready", () => {
  console.log(`Username : ${client.user.tag}`)
  const activity = new discord.RichPresence()
    .setApplicationId(`${config.applicationid}`)
    .setName(`${config.name}`)
    .setDetails(`${config.detail}`)
    .setState(`${config.state}`)
    .setType(`${config.status}`)
    .setAssetsLargeText(`${config.largeimageText}`)
    .setAssetsSmallText(`${config.smallimageText}`)
    .setStartTimestamp(Date.now())
    .addButton(`${config.button1}`, `${config.urlbutton1}`)
    .addButton(`${config.button2}`, `${config.urlbutton2}`)
  client.user.setActivity(activity.toJSON());   
  console.log(`Activity has loaded!`)
}) 

keepAlive();
client.login(process.env.TOKEN);
