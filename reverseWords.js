
var reverseWords = function (s) {

    let sentence = s.split(" ");
    for (let i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i].split("").reverse().join("");
    }
  return sentence.join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));
