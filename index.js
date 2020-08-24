const fs = require('fs');
const path = require('path');
const filePaths = './importantDocs/';
const files = fs.readdirSync(filePaths); //returns array of all files in directory

let outputFileName = 'output.js';
let outputData = {};

for (let i in files) {
  let fileName = path.basename(files[i], '.txt'); //returns fileName without extension
  outputData[i] = { name: fileName, file: filePaths + files[i] };
}

fs.appendFile(outputFileName, JSON.stringify(outputData), function (err) {
  if (err) {
    throw err;
  }

  console.log(`Successfully saved file: ${outputFileName}!`);
});
