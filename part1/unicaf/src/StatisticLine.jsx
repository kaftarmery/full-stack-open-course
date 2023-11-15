// eslint-disable-next-line no-unused-vars
import React from "react";

const StatisticLine = (props) => {
  return (
    <>
      <div>
        {props.lebel} : {props.stat}
      </div>
    </>
  );
};

export default StatisticLine;
