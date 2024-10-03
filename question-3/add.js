const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
    console.log('Logs directory created.');
}

process.chdir(logsDir);

for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `Sometext for file ${fileName}`);
    console.log(`Created: ${fileName}`);
}
