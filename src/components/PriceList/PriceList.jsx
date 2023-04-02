import React, { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";

const PriceList = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch("prices.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);

  return (
    <div className="">
      <h2 className="text-5xl text-center bg-purple-300 text-purple-950 font-bold p-4">
        Awesome Affordable Prices
      </h2>
      <div className="w-11/12 mx-auto">
        <div className="grid md:grid-cols-3 gap-10 my-10">
          {prices.map((price) => (
            <PriceCard key={price.id} price={price}></PriceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceList;
