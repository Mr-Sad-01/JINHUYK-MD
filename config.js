//#ENJOY BRO😍
// Credit: JINHUYK|KangJinhuyk 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kangjinhuyk@yahoo.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/KangJinhuyk/JINHUYK-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/TAGPcMC.jpeg,https://files.catbox.moe/59iafh.jpg,https://files.catbox.moe/jynitk.jpg,https://files.catbox.moe/dohubs.jpg,https://files.catbox.moe/nm85c3.jpg";
global.devs = "https://wa.me/242067274660 , https://wa.me/243849962848";
global.sudo = process.env.SUDO || "242067274660";
global.owner = process.env.OWNER_NUMBER || "50931144650";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/xvYDAsD.jpeg,https://i.imgur.com/TAGPcMC.jpeg,https://endpoint.web.id/server/file/I8dkDXm1nJDtOI75.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://unknown-md-sessions-generator-1.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU000bllGK01kai9ZSWplU0pJUGhVR21nc0JLQkwwb2QvdGhCU255UFpFWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkFjYVBxeC95cllINUl5ZTBiV2ZFeDdJMEdLVFQ0NnBBR3hyWWMrbmRtbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTQVNveWluNUVERmtIM094eTNmbXB1aFJleXdMTStDd2lmT0xVQng1NmtrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4QTIzZG81R3F2anhqcnBYZ1NyQWxGYWVmaUFzQUVxczRYVnFzZTE2SldzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlILzBlZjFJc1BmY1g2am1GWFpIQkpZS1hCb3BEcHdseDg4U0VKSVNzRTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InN1L25WWE1xOGZXblZwa3FmM3pWSlFUOXlTRGM5bGoyc2tmYkpQNC85SGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ08rbWNVbElxOG9qTFlVL1NLNWI2WUZWMG1UNytsVGJpWXB1bitBMERXcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaTJscEphM2ViSXdYT3VWeUd2Vkt4RVF1N3hFU0FheFpnbzhReHhOTmpDRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjN1YVlMSUdOUDFkczhxQXR1bU9WNWk5UTdRMysvUWdaNzVFckxLaHBocit6dUZIN0tYd2s4SDBOZWxiOVdTOGRZRVZqRzBZb2RINmY3aVpRc2RLNkFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIwLCJhZHZTZWNyZXRLZXkiOiJqZTZSR1h6cXNZMWlzMTN5MjBmVG5EUHdaZjJGbUNWSFhwZ1dOY2FVVGUwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjUwOTMxMTQ0NjUwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkUwQTBEMjE4REY0RjlCNTVBOTlFQTcyM0M0MDE0QkY0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzQwODk0NjR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjUwOTMxMTQ0NjUwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijk1NUY0QjI0MTJDMEFGRTU0MEU3ODIwQzZFRjA3MzVCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzQwODk0NjV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlA2dE5JN2FOU3NXOGNnRTA4NFppYkEiLCJwaG9uZUlkIjoiYzYyYTc4NmItMDM4Ni00MmEzLWJkMWMtOTc5ZmNhMDYyYTZiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilc2Nzl3dkVkZVRUd29iR1JITEFnSHFPdVVoRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVR3Q5VEZCWWlEWWNhekNIRmg1dVN6S1hDNFU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUjdNV0tHMVAiLCJtZSI6eyJpZCI6IjUwOTMxMTQ0NjUwOjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTXIgRmFuZmljbyDwn5iLIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKbVRvc01IRU9tMThMb0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJCUVFnbUt5R1Npa0EwSHBzUVM4L09pcUFEc043Unh3Rjdyem9PUGhHbHg0PSIsImFjY291bnRTaWduYXR1cmUiOiJSdjF0SHVabWNYcFVBZHpQRzFzeFF4WC8wc0NEYkUvR2VtcGdXUUwzRUVoQXNSYzcwMEtRTWp0OGU5MGNUR2tFODBXQXByaHhXR1NsTlVBcy9NWWZCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNWcxdXlkMEx3MXJGMEhiQXpGTWwxTWFGTlVBdzF0SXlKZnNDdFo2R2V6cFBmYnRYY0JCdFF5UzE0blV1VEpHTVJHZ2NPd2NTNVBWKytySXhidnpRQUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDkzMTE0NDY1MDozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFVRUlKaXNoa29wQU5CNmJFRXZQem9xZ0E3RGUwY2NCZTY4NkRqNFJwY2UifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzQwODk0NjIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT3d6In0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝐉𝚰𝚴𝚮𝐘𝐔𝐊`",
  author: process.env.PACK_AUTHER || "𝐉𝚰𝚴𝚮𝐘𝐔𝐊",
  packname: process.env.PACK_NAME || "𝐉𝐈𝐍𝐇𝐘𝐔𝐊-𝐌𝐃",
  botname: process.env.BOT_NAME || "Mr Andromède",
  ownername: process.env.OWNER_NAME || "Mr Dracula",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "JINHUYK").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
