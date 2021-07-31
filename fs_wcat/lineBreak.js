let answer = [];

function lineBreak(content) {
  let c = 0;
  for (let i = 0; i < content.length; i++) {
    if (content[i] != "" || i==0) {
      answer[c++] = content[i];

      if (i != content.length-1 && content[i + 1] == "" && i!=0) {
        answer[c++] = "";
      }
    }
  }
  return answer;
}

module.exports = {
  lineBreak: lineBreak,
};
