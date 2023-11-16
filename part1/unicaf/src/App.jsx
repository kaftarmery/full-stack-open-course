import { useEffect, useState } from "react";
import Buttons from "./Buttons";
import StatisticLine from "./StatisticLine";

const App = () => {
  const Statistics = () => {
    if (all === 0) {
      return (
        <>
          <p>No feedback given.</p>
        </>
      );
    }
    return (
      <table>
        <tbody>
          <StatisticLine lebel="Good" stat={good} />
          <StatisticLine lebel="Neutral" stat={neutral} />
          <StatisticLine lebel="Bad" stat={bad} />
          <StatisticLine lebel="All" stat={all} />
          <StatisticLine lebel="Average" stat={average} />
          <StatisticLine lebel="Positive" stat={positive} />
        </tbody>
      </table>
    );
  };

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const positive = all ? ((good / all) * 100).toFixed(2) : "0.00";

  // update the states
  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  useEffect(() => {
    setAll(good + neutral + bad);
    setAverage((good - bad) / (good + neutral + bad));
  }, [good, neutral, bad]);

  return (
    <div>
      <h1>give feedback</h1>
      <Buttons onClick={handleGoodClick} text="good" />
      <Buttons onClick={handleNeutralClick} text="neutral" />
      <Buttons onClick={handleBadClick} text="bad" />

      <h2>statistics</h2>
      <Statistics />
    </div>
  );
};

export default App;
