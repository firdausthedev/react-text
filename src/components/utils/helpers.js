// remove punctuation, digits, and extra spaces
export function normalizeText(text) {
  return text
    .replace(/(\s[^\w\s]|[^\w\s]\s)/g, " ") // Remove punctuation if it is preceded or followed by a space
    .replace(/[^\w\s]$/g, "") // Remove punctuation at the end of the string
    .replace(/\d+/g, "") // Remove digits
    .replace(/\s+/g, " ") // Replace multiple spaces with a single space
    .trim(); // Remove leading and trailing spaces
}

// word count
export function wordCount(text) {
  // Split the text by spaces and filter out any empty strings
  const words = text.trim().split(/\s+/).filter(Boolean);
  return words.length;
}

// character count
export function characterCount(text) {
  return text.length;
}

// character count without space
export function characterCountNoSpace(text) {
  return text.replace(/\s/g, "").length;
}

// sentence count
export function sentenceCount(text) {
  // Split the text by periods, exclamation marks, or question marks followed by a space or end of string
  const sentences = text.split(/(?<=[.!?])\s+/);

  // Filter out any empty strings from the array
  return sentences.filter(sentence => sentence.trim().length > 0).length;
}

// paragraph count
export function paragraphCount(text) {
  const paragraphs = text.split(/\n+/).filter(p => p.trim().length > 0);
  return paragraphs.length;
}

// most frequent word, if there are multiple words with the same frequency, return all of them
export function mostFrequentWord(text) {
  const textArray = text.split(" ");

  // Calculate word frequencies and determine the maximum frequency
  const wordFrequency = textArray.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});

  const maxFrequency = Math.max(...Object.values(wordFrequency));

  // Find all words that match the maximum frequency
  const mostFrequentWords = Object.keys(wordFrequency).filter(
    word => wordFrequency[word] === maxFrequency,
  );

  return mostFrequentWords;
}

// longest word
export function longestWord(text) {
  // Split the text into an array of words
  const words = text.split(" ");

  // find the longest word
  const longestLength = words.reduce((maxLength, currentWord) => {
    return currentWord.length > maxLength ? currentWord.length : maxLength;
  }, 0);

  // Filter the words that match the longest word length
  const longestWords = words.filter(word => word.length === longestLength);

  return longestWords;
}
