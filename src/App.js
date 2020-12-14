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
      setCoinsData(data)
      // console.log('api call working? ',data);
    }
    fetchCoinsData();
  }, []);
  
  return (
    <div>
      {/* {coinsData.map(coin => { */}
          {/* // //! pass attributes to Coin */}
          <TableMui
          appCoinsData={coinsData}
            // key={coin.id}
            // name={coin.name}
            // price={coin.current_price}
            // symbol={coin.symbol}
            // marketcap={coin.total_volume}
            // volume={coin.market_cap}
            // image={coin.image}
            // priceChange={coin.price_change_percentage_24h}
            // total_supply={coin.total_supply}
            // max_supply={coin.max_supply}
          />
        

      {/* })} */}
    </div>

  );

}

export default App;
