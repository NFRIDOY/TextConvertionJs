function capitalizeWords(str) {
  // Split the string into an array of words
  const words = str.split(" ");

  // Capitalize the first letter of each word and lowercase the rest of the letters
  const capitalizedWords = words.map(word => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1).toLowerCase();
    return firstLetter + restOfWord;
  });

  // Join the capitalized words back into a single string
  const result = capitalizedWords.join(" ");

  return result;
}

function NormalCapitalize(str) {
  // Split the string into an array of words
  const words = str.split(".");

  // Capitalize the first letter of each word and lowercase the rest of the letters
  const capitalizedWords = words.map(word => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1).toLowerCase();
    return firstLetter + restOfWord;
  });

  // Join the capitalized words back into a single string
  const result = capitalizedWords.join(".");

  return result;
}


let textArea = document.getElementById("textArea");
function toUpper() {
  let text = textArea.value;
  // console.log(text);
  let upperText = text.toUpperCase();
  console.log(upperText);
  textArea.value = upperText;
}

function toFirstUpper() {
  // const input = "aa bb ccc dddd";
  const input = textArea.value;
  const output = capitalizeWords(input);
  console.log(output);
  textArea.value = output;
}

function toLower() {
  let text = textArea.value;
  // console.log(text);
  let lowerText = text.toLowerCase();
  console.log(lowerText);
  textArea.value = lowerText;
}

function NormalCapitalization() {
  // const input = "aa bb ccc dddd";
  const input = textArea.value;
  const output = NormalCapitalize(input);
  console.log(output);
  textArea.value = output;
}