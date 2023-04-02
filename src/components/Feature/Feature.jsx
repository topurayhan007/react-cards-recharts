import React from "react";
import {
  Bars3Icon,
  XMarkIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

const Feature = ({ feature }) => {
  return (
    <div className="text-left flex py-1 mb-3 font-semibold">
      <CheckCircleIcon className="h-6 w-6 text-purple-700 mr-3" />
      <span>{feature}</span>
    </div>
  );
};

export default Feature;
