let answer = [];
function numberNonEmpty(content) {
  let count = 1;
  for (let i = 0; i < content.length; i++) {
    if (content[i] == "\n") {
      answer[i] = count++;
    } else {
      answer[i] = content[i];
    }
  }

  return answer;
}

module.exports = {
  numberNonEmpty: numberNonEmpty,
};
