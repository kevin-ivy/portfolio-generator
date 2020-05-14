const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if there's an error, reject the Promise and send the error to the Promise
            if (err) {
                reject(err);
                //return out of the function here to make sure it doesn't keep going
                return;
            }

            //if everything went well, resolve the Promise and send the result back
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            //check for error, reject if failed
            if (err) {
                reject(err);
                return;
            }

            //if everything passes, resolve and return function
            resolve({
                ok: true,
                message: 'File copied!'
            });
        });
    });
};

module.exports = {writeFile, copyFile};