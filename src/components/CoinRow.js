import React from "react";

const CoinRow = ({ coin, index }) => {
   console.log(coin,index); 
  return (
    <tr>
      <td>{index}</td>
      <td>{coin}</td>
    </tr>
  );
};

export default CoinRow;
