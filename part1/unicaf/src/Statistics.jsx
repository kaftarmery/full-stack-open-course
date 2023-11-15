// eslint-disable-next-line no-unused-vars
import React from "react";

const Statistics = (props) => {
  const { state, stats } = props;
  return (
    <div>
      <p>
        {state}: {stats}
      </p>
    </div>
  );
};

export default Statistics;
