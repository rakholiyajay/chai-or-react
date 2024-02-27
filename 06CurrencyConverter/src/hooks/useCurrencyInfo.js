import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        .then((res) => res.json())
        .then((res) => setData(res[currency])),
      console.table("data", data)
    );
  }, [currency]);
  console.table("data2", data);
  return data;
}

export default useCurrencyInfo;
