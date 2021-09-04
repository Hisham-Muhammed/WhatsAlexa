const chalk = require('chalk');
const {MessageType, WAConnection} = require('@adiwajshing/baileys');
const {StringSession} = require('./alexa/');
const fs = require('fs');

async function Alexa () {
    const conn = new WAConnection();
    const Session = new StringSession();
    conn.version = [2, 2119, 6]
    conn.logger.level = 'warn';
    conn.regenerateQRIntervalMs = 50000;
    
    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('WhatsAlexa')}
${chalk.white.bold('Made By ')}${chalk.red.bold('TOXIC DEVIL')}
${chalk.blue.italic('🔄 Loading QR CODE...')}`);
    });
    

    conn.on('open', () => {
        var st = Session.createStringSession(conn.base64EncodedAuthInfo());
        console.log(
            chalk.green.bold('YOUR SESSION: '), Session.createStringSession(conn.base64EncodedAuthInfo())
        );
        
        if (!fs.existsSync('config.env')) {
            fs.writeFileSync('config.env', `ALEXA_SESSION="${st}"`);
        }
            conn.sendMessage(
              conn.user.jid,
               st
               , MessageType.text
            )
        
            conn.sendMessage(
              conn.user.jid,
             '*⚠ Do not share this code with Anyone! ⚠*\n\nThank You For using WhatsAlexa 💖'
            , MessageType.text
           )
        
        console.log(
            chalk.red.bold('⚠ COPY THIS CODE, It is an IMPORTANT CODE... ⚠ IF YOU CANT COPY THIS CODE YOU CAN OPEN YOUR WHATSAPP, AND OPEN YOUR CHAT TO SEE THIS SESSION'))
            
        console.log(
            chalk.blue.bold('Thank You For Using WhatsAlexa 💖'))

        process.exit(0);
    });

    await conn.connect();
}

Alexa()
