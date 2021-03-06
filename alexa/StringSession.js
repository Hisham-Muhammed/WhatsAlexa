const fs = require('fs');
let s = '==='

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
        
        var split = string.split(s);
        if (split.length >= 2) {
            return JSON.parse(Buffer.from(split[split.length - 1], 'base64').toString('utf-8'));
        }
    }

    createStringSession(dict) {
        return 'Alexa===' + Buffer.from(JSON.stringify(dict)).toString('base64');
    }
}

module.exports = StringSession;
