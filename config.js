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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "2347041039367";
global.sudo = process.env.SUDO || "2347041039367";
global.owner = process.env.OWNER_NUMBER || "2347041039367";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0ljRVBwODV3Z0l5Z1JUbVZKR3VHUnRqN2lVUDNnWXY1VVlySlo1aVJWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUxDWjBVRVVveHE4akdZaEJJVXJLVWFubXI1aVNPODllbzJpMTlFWUdWcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2S1dvcGpCZmhBNVVIQUkvNEZrc2owY0NvM20vY1RPRDk0QkNOSGxvODE0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFTElsU3gxN3VpcFhTR2I5ZEtnaWw5YmxPeEdWR2p5Yllnd0RzdDdZb3lRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklGUnRHV0tMYnhxaWRpSURmZ2s2S0VralFBZG00SGo1NjFXNmVYc1lYRm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBNcFFhZ2wzc2R2SkpvTkdPb3poY00yeGozZ05qdyt3Y29uMUVoaTA5Z0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic05tSmZMajRyL1EvOEVsVGU4WW5yTjZTNTBnd1d3MER4eFF1M2NmUzJraz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0xaNHZqOHZMVDJIMHhDMGs1SXIrWXlQZlVob3Q1SzE0UmdCSmRDSmx5TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJnRHVyNmhTTkhJTWFVdmpJaXNMa1VDODdOclRsZVhzZ2hMVGZyRkxrZ1hzZWJIWkJRVVRuSTJvdHVxVHhIaHZCOFJpdkhnUXJTUytFRTh6Y1VJVUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMyLCJhZHZTZWNyZXRLZXkiOiJUdUp6TlBmenFCY3FDQUM3cXZWRWQvYlJ0ZnprZHlmQW8vVmozSVc1SXFrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJtZGVmS2ZzNlE5cXJtQmktNFU4R0pBIiwicGhvbmVJZCI6IjNkZGQ5YzI0LWQzMmYtNDkzZC05N2QxLTg3NzAzMTg1OThkNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqdE8wdTlZVDdBT09tRnJVUVNLRVVYbjJHcUE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2UzcDBPNjdRRFpaRGZRNXpWWXorR1IvU0NvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1SR0sxSDgyIiwibWUiOnsiaWQiOiIyMzQ3MDQxMDM5MzY3OjEyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Iu+9g++9j++9gu+9ku+9gSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGZEa3I0SEVMT2tvck1HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoickJHdjFkcHBFb2Y1OTJocFN6UkRlZUhrd2lLSXJyRU5XTHhxNWgzWXpCTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoienVjLzI4RUZ5WnRCbnNrcVNKS1FwY08wS3pUaWxPVGJ1VnJ1R0hua25ESUtzcU4zSHZkK0Z3c1lkMmJTdUZEYjhzZWI3UWZuV3VQd3Ywa20vYnc4Q2c9PSIsImRldmljZVNpZ25hdHVyZSI6IkRmRHhhMmROUE85RWZuWGswM0kxTFZsOG4zNWRkK0dZeDdBVTcxY3Vwb2RuNDZienFqeFVnanJweS9WSkROWldSdDdiY09HRWhsWkI0M0xGL2lkdkRnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzA0MTAzOTM2NzoxMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhd1JyOVhhYVJLSCtmZG9hVXMwUTNuaDVNSWlpSzZ4RFZpOGF1WWQyTXdUIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE4MTI5MjE2fQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "great day COBRA MD",
  author: process.env.PACK_AUTHER || "COBRA",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "COBRA-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "COBRA",
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
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
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
