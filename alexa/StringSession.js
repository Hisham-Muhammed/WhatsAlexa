const fs = require('fs');

class StringSession {
    constructor() {
    }

    deCrypt(string = undefined) {
        if ('ALEXA_SESSION' in process.env && string === undefined) {
            string = process.env.STRING_SESSION;
        } else if (string !== undefined) {
            if (fs.existsSync(string)) {
                string = fs.readFileSync(string, {encoding:'utf8', flag:'r'});
            }
        }
        
    createStringSession(dict) {
        return 'Alexa===' + Buffer.from(JSON.stringify(dict)).toString('base64');
    }
}

module.exports = StringSession;
