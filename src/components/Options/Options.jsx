const Options = ({ handleResetFeedback, handleLogFeedback }) => {
  return (
    <div>
      <button onClick={() => handleLogFeedback("good")}>Good</button>
      <button onClick={() => handleLogFeedback("neutral")}>Neutral</button>
      <button onClick={() => handleLogFeedback("bad")}>Bad</button>
      {<button onClick={handleResetFeedback}>Reset</button>}
    </div>
  );
};

export default Options;
