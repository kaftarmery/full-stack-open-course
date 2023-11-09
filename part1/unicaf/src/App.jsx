import { useState } from "react";
import Buttons from "./Buttons";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);

  const positiveFeedback = all ? ((good / all) * 100).toFixed(2) : "0.00";

  // update the states
  const handleGood = () => {
    setGood(good + 1);
    setAll(good + neutral + bad + 1);
    setAverage((good + neutral + bad) / 3);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setAll(good + neutral + bad + 1);
    setAverage((good + neutral + bad) / 3);
  };

  const handleBad = () => {
    setBad(bad + 1);
    setAll(good + neutral + bad + 1);
    setAverage((good + neutral + bad) / 3);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Buttons onClick={handleGood} text="good" />
      <Buttons onClick={handleNeutral} text="neutral" />
      <Buttons onClick={handleBad} text="bad" />

      <h2>statistics</h2>

      {/* OUTPUT HERE */}
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>

      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positiveFeedback}</p>
    </div>
  );
};

export default App;
