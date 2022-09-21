//Problem Statement
//1.a. Write a function which count the number of occurrence of words in a paragraph or a sentence.The function `countWords` takes a paragraph and two words as parameters. It compare  which word is most frequently occurred in the paragraph.

const paragraph =
  "I love teaching. If you do not love teaching what else can you love. I love Javascript if you do not love something which can give life to your appication what else can you love.";
function countWords(paragraph, word1, word2) {
  let count1 = 0;
  let count2 = 0;

  //Split method applying in input to put the strings into an array of substrings

  let input = paragraph.split(" ");

  //Applying For loop to iterate the string values
  for (let i = 0; i < input.length; i++) {
    if (input[i].includes(word1)) {
      //Check String if the first word exists in input array
      count1++;
    }
    if (input[i].includes(word2)) {
      //Check String if the second word exists in input array
      count2++;
    }
  }
  //Comparing the word counter to check if word1 occured more than word2
  if (count1 > count2) {
    console.log("The Word" + word1 + "more frequently occured than" + word2);
  } //Comparing the word counter to check if word1 occured more than word2
  else if (count2 > count1) {
    console.log("The Word" + word2 + "more frequently occured than" + word1);
  }
  //if above conditions doesn't matches then executing the same coccurance of words
  else {
    console.log("Both word occured same times");
  }
}

//1b
Problem;
//1.b. Write a function called ***cleanText***. The function takes raw text as a parameter and returns the clean text.

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
const cleanText = sentence.replace(/[^a-zA-Z0-9 ]/g, "");

console.log(cleanText);

//1c
Problem;
//1.c. After cleaning the text in the sentence from question number b you will get the following text. Count the number of words in this text. Don't include words with only one letter.

function WordCount(str) {
  return str.split(" ").length;
}

console.log(
  WordCount(
    "I love teaching. If you do not love teaching what else can you love. I love Javascript if you do not love something which can give life to your appication what else can you love"
  )
);
