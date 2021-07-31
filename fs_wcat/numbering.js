let answer = [];
function number(content) {
  for (let i = 0; i < content.length; i++) {
    answer[i] = i + 1 + " " + content[i];
  }
  return answer;
}

module.exports = {
  number: number,
};
