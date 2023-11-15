// eslint-disable-next-line no-unused-vars
import React from "react";

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;

  if (all === 0) {
    return (
      <div>
        <p>No feedback given yet.</p>
      </div>
    );
  }
  return (
    <>
      <div>Good: {props.good}</div>
      <div>Neutral: {props.neutral}</div>

      <div>Bad: {props.bad}</div>

      <p>All: {all}</p>
      <p>Average: {props.average}</p>
      <p>Positive: {props.positive}</p>
    </>
  );
};

export default Statistics;
