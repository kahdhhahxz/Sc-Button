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
    .setType(`${config.status}`)
    .setName(`${config.name}`)
    .setDetails(`${config.detail}`)
    .setApplicationId(`${config.applicationid}`)
    .setURL(`${config.url}`)
    .setStartTimestamp(Date.now())
    .setState(`${config.state}`)
    .setAssetsLargeImage(`${config.largeimage}`)
    .setAssetsSmallImage(`${config.smallimage}`)
    .setAssetsLargeText(`${config.largeimageName}`)
    .setAssetsSmallText(`${config.smallimageName}`)
    .addButton(`${config.button1}`, `${config.urlbutton1}`)
    .addButton(`${config.button2}`, `${config.urlbutton2}`)
  client.user.setActivity(activity.toJSON());   
  console.log(`Activity has loaded!`)
}) 

keepAlive();
client.login(process.env.TOKEN);
