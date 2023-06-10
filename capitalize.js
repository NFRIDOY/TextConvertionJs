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
  
  const input = "aa bb ccc dddd";
  const output = capitalizeWords(input);
  console.log(output);
  