const dotenv = require("dotenv");

const envFound = dotenv.config();
if(!envFound){
    throw new Error("Config file not found.");
}


const sourceFile = process.env.SOURCE_FILE;
if(!sourceFile){
    throw new Error("Please set 'SOURCE_FILE' path in the .env file");
}

const outputFile = process.env.OUTPUT_FILE;
if(!outputFile){
    throw new Error("Please set 'OUTPUT_FILE' path in the .env file");
}

const config = {
    sourceFile,
    outputFile
};

module.exports = config;