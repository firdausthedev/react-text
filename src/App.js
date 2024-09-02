import { useState } from "react";
import "./App.css";
import "./media.css";
import Sentiment from "sentiment";

import {
  characterCount,
  characterCountNoSpace,
  longestWord,
  mostFrequentWord,
  normalizeText,
  paragraphCount,
  sentenceCount,
  wordCount,
} from "./components/utils/helpers";
import Result from "./components/Result";
import Header from "./components/Header";
import TextInput from "./components/TextInput";

function App() {
  const [text, setText] = useState("");
  const [wordNum, setWordNum] = useState(0);
  const [charNum, setCharNum] = useState(0);
  const [charNumNoSpace, setCharNumNoSpace] = useState(0);
  const [sentenceNum, setSentenceNum] = useState(0);
  const [paragraphNum, setParagraphNum] = useState(0);
  const [mostFreqWord, setMostFreqWord] = useState([""]);
  const [longestWordArr, setLongestWordArr] = useState([""]);
  const [sentimentResult, setSentimentResult] = useState("");
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [isEmptyInput, setIsEmptyInput] = useState(false);

  const handleTextChange = newText => {
    setText(newText);
  };

  const onAnalyzeClick = () => {
    if (text.length > 0) {
      const normalizedText = normalizeText(text);
      setWordNum(wordCount(normalizedText));
      setCharNum(characterCount(normalizedText));
      setCharNumNoSpace(characterCountNoSpace(normalizedText));
      setSentenceNum(sentenceCount(text));
      setParagraphNum(paragraphCount(text));
      setMostFreqWord(mostFrequentWord(normalizedText));
      setLongestWordArr(longestWord(normalizedText));
      setIsResultVisible(true);
      setIsEmptyInput(false);

      const newSentiment = new Sentiment();
      const analysis = newSentiment.analyze(text);

      setSentimentResult(analysis);
    } else {
      setIsEmptyInput(true);
      setIsResultVisible(false);
    }
  };

  return (
    <main className="container">
      <Header />
      <TextInput
        onAnalyzeClick={onAnalyzeClick}
        text={text}
        handleTextChange={handleTextChange}
        isEmptyInput={isEmptyInput}
      />

      {isResultVisible && (
        <Result
          wordNum={wordNum}
          charNum={charNum}
          charNumNoSpace={charNumNoSpace}
          sentenceNum={sentenceNum}
          paragraphNum={paragraphNum}
          mostFreqWord={mostFreqWord}
          longestWordArr={longestWordArr}
          sentimentResult={sentimentResult}
        />
      )}
    </main>
  );
}

export default App;
