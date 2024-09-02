const TextArea = ({ value, onChange }) => {
  return (
    <textarea
      value={value}
      onChange={e => onChange(e.target.value)}
      id="input"
      rows="14"
      placeholder="Write your text here..."></textarea>
  );
};

export default TextArea;
