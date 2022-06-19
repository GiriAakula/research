const axios = require('axios').default;
const fs = require('fs');
var crypto = require('crypto');
const {google} = require("googleapis");
const moment = require("moment");

async function main() {
    try {
        const response = await axios.get('https://jntuaresults.ac.in/');
        writeToFile(response.data);
        const hash = await checksumFile("sha1", "./response.html")
        deleteFile()
        console.log('hash', hash)
        addToSheet(hash)
    } catch (error) {
        console.error(error);
    }
}

main();

async function addToSheet(hash){
    const auth = new google.auth.GoogleAuth({
        keyFile:"credentials.json",
        scopes:"https://www.googleapis.com/auth/spreadsheets"
    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({ version: "v4", auth: client });

    const spreadsheetId = "1WMMV6CLzwFMTnHCThU8-0Q2cRQcw-MXFRS8hM5O6-mE";

    await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "Sheet1!A:B",
        valueInputOption: "USER_ENTERED",
        resource: {
          values: [
            [moment().utcOffset(330).format('DD-MM-YYYY, HH:mm:ss'), hash],
        ],
        },
    });
}

function writeToFile(data) {
    fs.writeFileSync('./response.html', data);
}

function deleteFile(){
    fs.unlinkSync("./response.html")
}

function checksumFile(hashName, path) {
    return new Promise((resolve, reject) => {
        const hash = crypto.createHash(hashName);
        const stream = fs.createReadStream(path);
        stream.on('error', err => reject(err));
        stream.on('data', chunk => hash.update(chunk));
        stream.on('end', () => resolve(hash.digest('hex')));
    });
}