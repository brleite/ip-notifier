const fetch = require('node-fetch');
const config = require("./config.json");
const utils = require("./utils/utils");
const fs = require('fs');

// utils.sendBotMessage("Iniciando Bot Bertioga");

(async () => {
  try {
    const url = 'https://ipinfo.io/ip';
    const currentIpFile = '/tmp/currentIp.txt';

    const options = {
    };


    try {
      const currentIp = fs.readFileSync(currentIpFile, 'utf8');
      console.log(`Current IP: ${currentIp}`)

      fetch(url, options)
        .then( res => res.text() )
        .then( data => {
                 const novoIp = data;
                 console.log(`Novo IP: ${novoIp}`);
               
                 if (novoIp && currentIp && currentIp != novoIp) {
                   utils.sendBotMessage(`Seu IP é: ${novoIp}`);
                   fs.writeFileSync(currentIpFile, novoIp);
                 }
               }
              ); 

    } catch (err) {
      console.error(err)
    }
    
  } catch (e) {
    console.log(e);
  }
})();
