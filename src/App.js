import "./App.css";
import TableMui from "./components/TableMui";
import { useState, useEffect } from "react";

function App() {
  const [coinsData, setCoinsData] = useState([]);

  useEffect(() => {
    async function fetchCoinsData() {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C%2024h%2C%207d%2C%2014d%2C%2030d%2C%20200d%2C%201y%2C%205y%2C%2010y"
      );
      const data = await res.json();
      setCoinsData(data);
      // console.log('api call working? ',data);
    }
    fetchCoinsData();
  }, []);

  return (
    <div>
      {/* // //! pass attributes to Coin */}
      <TableMui appCoinsData={coinsData} />
    </div>
  );
}

export default App;
