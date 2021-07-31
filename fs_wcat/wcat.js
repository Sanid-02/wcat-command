const fs = require("fs");

const displayFiles = require("./displayFiles");
const lineBreak = require("./lineBreak");
const nonemptylines = require("./nonemptylines");
const numbering = require("./numbering");

let consoleInput = process.argv.slice(2);
let cmd = [];
let passedPath = [];

for (let i = 0; i < consoleInput.length; i++) {
  let firstChar = consoleInput[i].charAt(0);
  if (firstChar == "-") {
    cmd.push(consoleInput[i]);
  } else {
    passedPath.push(consoleInput[i]);
  }
}


for (let i = 0; i < passedPath.length; i++) {
  let ans = fs.existsSync(passedPath[i]);
  if (ans == false) {
    console.log("This File Does not Exist -> " + passedPath[i]);
    return;
  }
}

//For Extracting the Content of the Files passed in path
let content = "";
for (let i = 0; i < passedPath.length; i++) {
  content += fs.readFileSync(passedPath[i]);
}
content = content.split("\r\n");

//Calling Modules as per cmd array, along with handling conflicts
if (cmd.length == 0) {
  displayFiles.display(content);
} else {
  let ans = content;
  for (let i = 0; i < cmd.length; i++) {
    if (cmd[i] == "-n" || cmd[i] == "-b") {
      for (let j = i + 1; j < cmd.length; j++) {
        if (cmd[j] == "-b" || cmd[j] == "-n") {
          cmd.splice(j, 1);
          j--;
        }
      }
    }
  }

  if (cmd.includes("-s")) {
    ans = lineBreak.lineBreak(ans);
  }
  if (cmd.includes("-n")) {
    ans = numbering.number(ans);
  }
  if (cmd.includes("-b")) {
    ans = nonemptylines.numberNonEmpty(ans);
  }

  //Displaying Final Answer after performing all commands
  for (let i = 0; i < ans.length; i++) {
    console.log(ans[i]);
  }
}
