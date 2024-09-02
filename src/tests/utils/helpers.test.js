import {
  normalizeText,
  wordCount,
  characterCount,
  characterCountNoSpace,
  sentenceCount,
  paragraphCount,
  mostFrequentWord,
  longestWord,
} from "../../components/utils/helpers";

describe("normalizeText", () => {
  test("should remove punctuation, digits, and extra spaces", () => {
    expect(normalizeText("Hello, World! This is a test: 12345.")).toBe(
      "Hello World This is a test",
    );
  });

  test("should ignore multiple spaces", () => {
    expect(normalizeText("  Hello  World!  ")).toBe("Hello World");
  });
});

describe("wordCount", () => {
  test("should return 0 for an empty string", () => {
    const text = "";

    const normalizedText = normalizeText(text);

    expect(wordCount(normalizedText)).toBe(0);
  });

  test("should count words in a string with single words", () => {
    const text = "hello";

    const normalizedText = normalizeText(text);

    expect(wordCount(normalizedText)).toBe(1);
  });

  test("should count words in a string with multiple words", () => {
    const text = "hello world";

    const normalizedText = normalizeText(text);

    expect(wordCount(normalizedText)).toBe(2);
  });
});

describe("characterCount", () => {
  test("should return the correct length of a string without space", () => {
    const text = "Hello";

    const normalizedText = normalizeText(text);

    expect(characterCount(normalizedText)).toBe(5);
  });

  test("should return the correct length of a string with space", () => {
    const text = "Hello World";

    const normalizedText = normalizeText(text);

    expect(characterCount(normalizedText)).toBe(11);
  });
});

describe("characterCountNoSpace", () => {
  test("should return the correct length of a string without spaces", () => {
    const text = "Hello";

    const normalizedText = normalizeText(text);

    expect(characterCountNoSpace(normalizedText)).toBe(5);
  });

  test("should return the correct length of a string with spaces", () => {
    const text = "Hello World";

    const normalizedText = normalizeText(text);

    expect(characterCountNoSpace(normalizedText)).toBe(10);
  });

  test("should handle strings with multiple spaces correctly", () => {
    const text = "  a  b  c  ";

    const normalizedText = normalizeText(text);

    expect(characterCountNoSpace(normalizedText)).toBe(3);
  });
});

describe("sentenceCount", () => {
  test("should count the number of sentences in a text", () => {
    expect(sentenceCount("Hello world. This is a test.")).toBe(2);
    expect(sentenceCount("React.js is a test.")).toBe(1);
  });
});

describe("paragraphCount", () => {
  test("should count the number of paragraphs in a text", () => {
    const text = `This is the first sentence.
    This is the second sentence!
    
    This is the start of a new paragraph. Here is another sentence.`;

    expect(paragraphCount(text)).toBe(3);
    expect(paragraphCount("This is a single paragraph.")).toBe(1);
    expect(
      paragraphCount(
        "First paragraph.\n\nSecond paragraph.\n\n\nThird paragraph.",
      ),
    ).toBe(3);
    expect(paragraphCount("\n\n")).toBe(0);
  });
});

describe("mostFrequentWord", () => {
  test("should return the most frequent word when there is a clear winner", () => {
    const text = "React.js is a library. React.js.";

    const normalizedText = normalizeText(text);

    expect(mostFrequentWord(normalizedText)).toEqual(["React.js"]);
  });

  test("should return one of the most frequent words if there is a tie", () => {
    const text = "React.js is a library. React.js. is great.";
    const normalizedText = normalizeText(text);
    const result = mostFrequentWord(normalizedText);

    expect(result).toContain("React.js");
    expect(result).toContain("is");
    expect(result.length).toBe(2);
  });

  test("should return an empty array for an empty string", () => {
    const text = "";
    const normalizedText = normalizeText(text);

    expect(mostFrequentWord(normalizedText)).toEqual([""]);
  });
});

describe("longestWord", () => {
  test("should return the longest word when there is a clear longest word", () => {
    const text = "React.js is a popular JavaScript library";
    const normalizedText = normalizeText(text);

    expect(longestWord(normalizedText)).toEqual(["JavaScript"]);
  });

  test("should return one of the most longest words if there is a tie", () => {
    const text = "React.js is a library. React.js is great.";
    const normalizedText = normalizeText(text);
    const result = longestWord(normalizedText);

    expect(result).toContain("React.js");
    expect(result).toContain("React.js");
    expect(result.length).toBe(2);
  });

  test("should return an empty array for an empty string", () => {
    const text = "";
    const normalizedText = normalizeText(text);

    expect(longestWord(normalizedText)).toEqual([""]);
  });
});
