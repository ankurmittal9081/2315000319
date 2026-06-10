const fs = require("fs");

function log(message) {
    const time = new Date().toISOString();

    fs.appendFileSync(
        "app.log",
        `[${time}] ${message}\n`
    );
}

module.exports = log;