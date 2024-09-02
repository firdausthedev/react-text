import TextArea from "./TextArea";

const TextInput = ({
  onAnalyzeClick,
  text,
  handleTextChange,
  isEmptyInput,
}) => {
  return (
    <section id="text">
      <form
        onSubmit={e => {
          e.preventDefault(); // Prevents the default form submission behavior
          onAnalyzeClick();
        }}>
        <label htmlFor="input">Enter text (copy and paste is fine) here:</label>
        <TextArea id="input" value={text} onChange={handleTextChange} />
        {isEmptyInput && <p className="error">Please enter text!</p>}
        <button type="submit" className="button" aria-label="submit button">
          Analyze
        </button>
      </form>
    </section>
  );
};

export default TextInput;
