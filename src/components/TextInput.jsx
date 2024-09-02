import TextArea from "./TextArea";

const TextInput = () => {
  return (
    <section id="text">
      <form>
        <label htmlFor="input">Enter text (copy and paste is fine) here:</label>
        <TextArea />
        <p className="error">Please enter text!</p>
        <button type="submit" className="button" aria-label="submit button">
          Analyze
        </button>
      </form>
    </section>
  );
};

export default TextInput;
