import React, { useEffect, useState } from "react";
import axios from "axios";
import { data } from "autoprefixer";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const PhoneBar = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    //   .then((res) => res.json())
    //   .then((data) => setPhones(data));
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const loadedData = data.data.data;
        console.log(loadedData);
        const phonesData = loadedData.map((phone) => {
          const parts = phone.slug.split("-");
          const price = parseInt(parts[1]);
          const phoneInfo = {
            name: phone.phone_name,
            price: price,
          };
          return phoneInfo;
        });
        console.log(phonesData);
        setPhones(phonesData);
      });
  }, []);
  return (
    <div className="px-5">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={phones}>
          <Bar dataKey="price" fill="#ea384d"></Bar>
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PhoneBar;
