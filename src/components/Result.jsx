import React from "react";

const Result = ({
  wordNum,
  charNum,
  charNumNoSpace,
  sentenceNum,
  paragraphNum,
  mostFreqWord,
  longestWordArr,
}) => {
  return (
    <section id="result">
      <h2>Result:</h2>
      <div>
        <p>Word Count: {wordNum}</p>
        <p>Character Count: {charNum}</p>
        <p>Character Count (Excluding Spaces): {charNumNoSpace}</p>
        <p>Sentence Count: {sentenceNum}</p>
        <p>Paragraph Count: {paragraphNum}</p>
        <p>Most Frequent Word: {mostFreqWord.map(word => word).join(", ")}</p>
        <p>Longest Word: {longestWordArr.map(word => word).join(", ")}</p>
      </div>
      <button className="button">Export to PDF</button>
    </section>
  );
};

export default Result;
