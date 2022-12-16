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
      fetch(url, options)
        .then( res => res.text() )
        .then( data => {
                console.log(data);

                const novoIp = data;
                const mensagem = `Novo IP: ${novoIp}`;
                
                console.log(mensagem);
               
                if (fs.existsSync(currentIpFile)) {
                  const currentIp = fs.readFileSync(currentIpFile, 'utf8');
                  console.log(`IP Atual: ${currentIp}`)
                 
                  if (novoIp && currentIp && currentIp != novoIp) {
                    utils.sendBotMessage(mensagem);
                    fs.writeFileSync(currentIpFile, novoIp);
                  }                   
                } else {
                  utils.sendBotMessage(mensagem)
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
