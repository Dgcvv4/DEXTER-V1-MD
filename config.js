const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94774699760'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'Sithumkalhara271@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "94761516805"
global.devs = '94761516805';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUVzbFhEQ05CU0o2TSs2TGhrSlZ6S1RxYlRsR3pGdkFjUnZqN2Y3a3pFaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0VHWGdkRUluVytxYWhsSGJ2MkYwQ0dXZGR1cDVKNkY4bHZZNnRCWUVWST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyQW5uSndhcE1LS21HZU1rMjRGVHpQdVhjZTdZQXhuUEh3TEVzRzVYOW1rPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJodVU4Z2wvbFY2MUFRUzFQWUtzZFg0YjFxZGErekpNZ1JtU29HVnBROWhnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllMQmxLM3JxV0taSkZLWW9JZnduN0ZZeFRvVWxvc3RHVFBYQ3dtYlIzV289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJvcnBtZFpRNG1EUTNiTWtDUm1DeDFWWWFpK1VPTHFJblpvYzJnSGVSVWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0d5alRSOGtOWWpJcVVrUTQwcnh5UmlFYVc5Nk5nODVmdm9nc3JqVTcyMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieFl2OHh3bnJ5K1J6ZWdLT21SZWo1LytIalZhR1ZVdmxRNkhZWFk4MTZnZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNqejhHUmIvRTBVWTVxNk1OUVJPWDIwNmNJdDBlU0VhLzVCdjlXdnY0ZVBVT3BzZFByWTZGKzJWdUc4akg5U3FjZ0hQc0h2NjZRWnJrdUc0OVpkRURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAwLCJhZHZTZWNyZXRLZXkiOiJEaDBDbVhtVU5GcjNBcXl0M2J6MFBwaTFrTi9kM0VESVNLQXV6TVF5NC9JPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJvN2U0b3M5NFM2aUJXbHFJUWdPVXBBIiwicGhvbmVJZCI6ImIwYjNlMzgwLTJlODUtNGNiYi04Njg5LTk2OWQ2MTRkMzA0NiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPdXg1Z0F2TXE2L1FDWVNoRWFhR3pubVgyL0E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOWYzZnFyc1JTL3hmNVNRNUJJNloybXZCRERrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhUMkpQNkRUIiwibWUiOnsiaWQiOiI5NDc3NDY5OTc2MDo3NUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHZUNVZrUXJMR0x1UVlZQkNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiY1QyOHRDZWx0Y0IwUWYxUlgvN01iZm85elptdGtEcjhSMXBJdzJpSUZpaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZnlkaStRWHBlb01ObDhMYmZHUWZsY3ZFTjVyU2gvelUwbWZkOUVXT0VoOGVkaW50QnRGZlJVUTA4b1JmZ2d3bW1FYWdmNmJ6S0ZKRjYzazFmNEpnQUE9PSIsImRldmljZVNpZ25hdHVyZSI6InU0TlZuVXdkSTB0YXBhSXFVcmFCeWxFQUFFTmluWlVZelhuSGxCWWd0TDB6bng0NENPZFd6VkFtRno4Wm9kYmVkcVlVL0RWZ21HbmkxY3NJb1ZMR0RBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzQ2OTk3NjA6NzVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWEU5dkxRbnBiWEFkRUg5VVYvK3pHMzZQYzJaclpBNi9FZGFTTU5vaUJZcCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMDMzNjk1M30=",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'SITHUWA BOT',
  packname:  process.env.PACK_NAME || 'MADE BY SITHUM KALHARA',
  
  botname:   process.env.BOT_NAME === undefined ? "SITHUWA-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'sithumkalhara' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'sithuwa-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
