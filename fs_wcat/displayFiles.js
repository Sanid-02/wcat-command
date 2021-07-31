let fs = require("fs");

function displayFiles(content) {
     for (i = 0; i < content.length; i++) {
  //   content = content + fs.readFileSync(filesArr[i]) + "\n";
  console.log(content[i]);
   }
}

module.exports = {
  display: displayFiles,
};
