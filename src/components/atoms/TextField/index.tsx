import React, { ReactNode } from "react";
import "./style.css";

const TextField = ({ ...others }) => {
  return (
    <div className="input-wrapper">
      <input type="text" {...others} />
    </div>
  );
};

export default TextField;
