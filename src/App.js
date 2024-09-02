import "./App.css";
import "./media.css";
import Header from "./components/Header";
import Result from "./components/Result";
import TextInput from "./components/TextInput";

function App() {
  return (
    <main className="container">
      <Header />
      <TextInput />
      <Result
        wordNum={0}
        charNum={0}
        charNumNoSpace={0}
        sentenceNum={0}
        paragraphNum={0}
        mostFreqWord={["React"]}
        longestWordArr={["React"]}
      />
    </main>
  );
}

export default App;
