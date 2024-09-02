import logo from "../logo.svg";

const Header = () => {
  return (
    <section id="header">
      <img src={logo} alt="React.js logo" />
      <div>
        <h1>React.js Text Analyzer</h1>
        <p>
          A text analyzer that helps you find most frequent words, number of
          characters, words, sentences and paragraphs with React.js.
        </p>
      </div>
    </section>
  );
};

export default Header;
