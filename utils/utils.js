function sendBotMessage(msg) {
  const TelegramBot = require("node-telegram-bot-api");
  const config = require("../config.json");

  const TOKEN = config.bot_token;
  const CHATID = config.bot_chatid;
  const bot = new TelegramBot(TOKEN /*, { polling: true }*/);
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

  bot.sendMessage(CHATID, msg);
}

module.exports = {
  sendBotMessage,
};
