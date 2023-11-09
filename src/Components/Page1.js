import React from "react";
import "./Page1.css";
import money from "./money.png";
import graph from "./graph.png";

const Page1 = () => {
  return (
    <div className="container">
      <div className="box-1">
        <div className="left">
          <input className="search-bar" type="text" placeholder="Search here" />
        </div>
        <div className="right">
          <img className="moneybag" src={money} />
          <img className="moneybag" src={money} />
          <img className="moneybag" src={money} />
          <img className="moneybag" src={money} />
          <div className="gold">
            <span className="text-red-400">Gold</span>
            <img className="moneybag" src={graph} />
            <div className="buy">
              <span>Buy:7390.00</span>
              <span>Buy:7657.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
