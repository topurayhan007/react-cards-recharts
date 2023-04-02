import React from "react";
import Feature from "../Feature/Feature";

const PriceCard = ({ price }) => {
  return (
    <div className="flex flex-col  text-center bg-indigo-200 rounded-lg py-8 px-5">
      <h2>
        <span className="text-purple-700 text-5xl font-extrabold">
          {price.price}
        </span>
        <span className="text-2xl font-bold text-white">/mon</span>
      </h2>
      <h5 className="text-2xl mt-6 font-bold">{price.name}</h5>
      <p className="underline font-bold text-lg text-left text-purple-700 py-2">
        Features:{" "}
      </p>
      {price.features.map((feature, index) => (
        <Feature key={index} feature={feature}></Feature>
      ))}
      <button className="w-100 text-white font-bold text-lg mt-auto bg-purple-600 rounded-lg py-4">
        Buy Now
      </button>
    </div>
  );
};

export default PriceCard;
