import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import TableCoin from "./components/TableCoin";
import CoinRow from "./components/CoinRow";
function App() {
  const [coins, setCoins] = useState([]);
  const getData = async () => {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    console.log(res.data);
    setCoins(res.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="cointainer">
      <div className="row"></div>
      
      <TableCoin coins={coins} />
      <CoinRow />
    </div>
  );
}

export default App;

//useEffect ejecuta una funcion apenas carga el componente
