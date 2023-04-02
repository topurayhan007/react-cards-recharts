import React from "react";

const Link = ({ route }) => {
  return (
    <li className="font-bold text-lg">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
