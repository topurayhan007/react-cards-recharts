import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const marksArray = [
    { id: 1, name: "John", physics: 85, chemistry: 10, math: 55 },
    { id: 2, name: "Emma", physics: 12, chemistry: 80, math: 78 },
    { id: 3, name: "David", physics: 68, chemistry: 86, math: 90 },
    { id: 4, name: "Sarah", physics: 40, chemistry: 55, math: 92 },
    { id: 5, name: "Michael", physics: 90, chemistry: 91, math: 89 },
    { id: 6, name: "Sophia", physics: 93, chemistry: 89, math: 91 },
    { id: 7, name: "Daniel", physics: 87, chemistry: 82, math: 93 },
    { id: 8, name: "Ava", physics: 94, chemistry: 95, math: 88 },
    { id: 9, name: "Matthew", physics: 82, chemistry: 87, math: 84 },
    { id: 10, name: "Olivia", physics: 89, chemistry: 93, math: 87 },
    { id: 11, name: "Ethan", physics: 75, chemistry: 85, math: 79 },
    { id: 12, name: "Isabella", physics: 92, chemistry: 89, math: 95 },
  ];

  return (
    <div className="px-5">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={marksArray}>
          <Line dataKey="physics" stroke="#8884d8" activeDot={{ r: 5 }}></Line>
          <Line dataKey="chemistry" stroke="#ea83ea"></Line>
          <Line dataKey="math"></Line>
          <XAxis dataKey="name" />
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;
