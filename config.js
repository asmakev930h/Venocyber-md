//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/3c3e18d4fe3ac23865ddf.jpg";
global.devs = "22871535411";
global.sudo = process.env.SUDO || "22871535411,2347041039367";
global.owner = process.env.OWNER_NUMBER || "22871535411";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/3c3e18d4fe3ac23865ddf.jpg";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0ZTeW03K3k5T25IeFVmYkJnbUZZSW9WSVhhVmFodWV4WWxZS0JsRERWST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWXRZb1UrYjVDOHdFNzRFcU5Hc2I4S2VUc3NUMW9WSXpBc3BGd3FhcERIZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtUFIrejI2aGFrUlZNVWQzd0h6aUxjbk9nNEkyREp5Y2RONGtNR0t3MzBvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTNFk2NGp2TVFYN1ZSbkFhNDhwVEhkZ1hrYTU0cm9ZY3phUVNSTWVzYmk4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitQbTg3THlITkxyZ1pBdXRnM2ZJTmx2N0FXK3VEQTlOSXNkd1JXWDFMVXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNxRCtYYlQ2RWhqK0FhaE1PNGVWNGVKRkczUzB1RHRraUxsUHFHbkM0MW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0lvWTBPQmk1cU90NmxsZ09IazI3UTBjL0VVSHhEY3Z6WTU4UktpOVBuTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieE4vNGIrYmdMVW1LcXJxanlnenNWU2MzWkswbWRBOE1iMFNJUjdVVkV6ND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilp1VW8xRUlCNW95bmZNUVptYXEzWjNQbHdSb0FrT09wSjduL0RsZ3RhcVJ2KzNZcDluUTNGUnhGMHZId213Q0tHcTVBMGEyNVdrUTNtamQzUTBYNGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzksImFkdlNlY3JldEtleSI6Imp2dHNhTi95eDBGbjVUaG02TmdmV0paWGI0U0wwWTl0NWgrME1TQWk3TWM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik1wNFRzS05TUVJlN0VNRkhacEhsVnciLCJwaG9uZUlkIjoiMDRlZmYxZDktMjViNS00ZjI5LThmOWEtYWUyOTY5YzIyZDQxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQ3QmdyRElpc0J0bGQ5OW44NnorbG5QTFdpRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSnd2MHJjTm5wUlNEblRKYU0ydHppT2pXRW89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUUJMTkRIS1giLCJtZSI6eyJpZCI6IjIyODcxNTM1NDExOjM4QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPYkV6dFlGRUlHNG9yTUdHQW9nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJIaU9Bdk9HR0p1Y3creDlBSEJ0cUZydFZUV0NSY1dqY3kvUjNnc1h2b1VVPSIsImFjY291bnRTaWduYXR1cmUiOiJsaGpObGlaUHZobEx2Nk9Bdm1uSnRxNXgzam5QR0ZpUlJvdHg0MVhVUitEcUNoK0tmV0pQRnNWVWc1QUlWU3EvOEFXczA3cjA1UXhISEpIMEVQbzZoQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYnVuZDJmRlZ4d2R0UGc4SExmdzJKQmF4YmpKNU5sK29sZHdvME9SSWJYU25pUW5wS1AxUEtZVi9DV3gwRTFaQk4xanBZRWV2dW5TQWM2NVFJdUdSaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjg3MTUzNTQxMTozOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSNGpnTHpoaGlibk1Qc2ZRQndiYWhhN1ZVMWdrWEZvM012MGQ0TEY3NkZGIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTgxMzE3MjgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS1RPIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "great day 𝐒𝐋𝚰𝚳 𝚩𝐔𝐋𝐋𝚵𝚻 𝚩𝚯𝚻𝐒 😈💀",
  author: process.env.PACK_AUTHER || "𝐒𝐋𝚰𝚳 𝚩𝐔𝐋𝐋𝚵𝚻 𝚩𝚯𝚻𝐒 😈💀",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐒𝐋𝚰𝚳 𝚩𝐔𝐋𝐋𝚵𝚻 𝚩𝚯𝚻𝐒 😈💀",
  ownername: process.env.OWNER_NAME || "𝐒𝐋𝚰𝚳 𝚩𝐔𝐋𝐋𝚵𝚻 𝚩𝚯𝚻𝐒 😈💀",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-nzj66xdSVURMqSV8EBvpT3BlbkFJrw4a1XClnXyLUzoVftJV",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "𝐒𝐋𝚰𝚳 𝚩𝐔𝐋𝐋𝚵𝚻 𝚩𝚯𝚻𝐒").toUpperCase(),
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
