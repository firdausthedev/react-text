import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Result = ({
  wordNum,
  charNum,
  charNumNoSpace,
  sentenceNum,
  paragraphNum,
  mostFreqWord,
  longestWordArr,
  sentimentResult,
}) => {
  const handleExportPDF = () => {
    const input = document.getElementById("result");
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("result.pdf");
    });
  };

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
        <p>
          Sentiment:{" "}
          {sentimentResult.score > 0
            ? "Positive"
            : sentimentResult.score < 0
              ? "Negative"
              : "Neutral"}
        </p>
      </div>
      <button className="button" onClick={handleExportPDF}>
        Export to PDF
      </button>
    </section>
  );
};

export default Result;
