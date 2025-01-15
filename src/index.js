const config = require("./config");
const util = require("util");
const fs = require("fs");

let jsonData = null;
try {
    jsonData = require(config.sourceFile);
} catch (err) {
    if(err.code === "MODULE_NOT_FOUND"){
        throw new Error(util.format("'SOURCE_FILE' not found JSON (%s).", config.sourceFile));
    }else if(err instanceof SyntaxError){
        throw new Error(util.format("'SOURCE_FILE' contains invalid JSON (%s).", config.sourceFile));
    } else {
        throw new Error("An unknown error occured.");
    }
}
jsonData = JSON.stringify(jsonData, null, "\t")
    .replaceAll("\t", "&nbsp;".repeat(4))
    .replaceAll("\n", "<br>\n");
try {
    fs.writeFileSync(config.outputFile, jsonData);    
} catch (err) {
    throw new Error("Unable to write to the file. Please check if the file path is correct and if you have the necessary permissions to write to the directory.");
}