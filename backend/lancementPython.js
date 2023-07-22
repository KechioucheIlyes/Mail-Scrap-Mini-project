const { spawn } = require("child_process");

async function lancement(param) {
    let dataToSend = "";

    const python = spawn(
        "/opt/homebrew/bin/python3.10",
        ["/Users/ilyeskechiouche/Desktop/mail_scrap/backend/myEnv/script.py", param]
    );

    python.stdout.on("data", function (data) {
        dataToSend += data.toString(); 
    });

    return new Promise((resolve, reject) => {
        python.on("close", (code) => {
            try {
                const parsedData = JSON.parse(dataToSend);
                resolve(parsedData);
            } catch (error) {
                reject(error);
            }
        });
    });
}

module.exports = lancement;
