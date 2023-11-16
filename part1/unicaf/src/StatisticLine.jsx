// eslint-disable-next-line no-unused-vars
import React from "react";

const StatisticLine = ({ lebel, stat }) => {
  return (
    <table>
      <td>{lebel}: </td>
      <td>{stat}</td>
    </table>
  );
};

export default StatisticLine;
