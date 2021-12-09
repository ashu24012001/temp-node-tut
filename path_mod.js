const path=require("path");
//displays path seperator which is set as default in the system:
console.log(path.sep);
//provides pathname after joining the files/folders with seperator:
const filePath=path.join('\content','subfolder','test.txt');
console.log(filePath);
//provides the last/base path:
const base=path.basename(filePath);
console.log(base);
//provides absolute path:
const absolute=path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);
