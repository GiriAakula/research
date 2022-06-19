const axios = require('axios').default;
const fs = require('fs');
var crypto = require('crypto')

async function getUser() {
    try {
        const response = await axios.get('https://jntuaresults.ac.in/');
        writeToFile(response.data);
        const hash = await checksumFile("sha1", "./response.html")
        console.log('hash', hash)
        deleteFile()
    } catch (error) {
        console.error(error);
    }
}

getUser();
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