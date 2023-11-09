import React from "react";
import "./Page1.css";
import money from "./money.png";
import graph from "./graph.png";
import working from "./working.png";

const Page1 = () => {
  return (
    <div className="container">
      <div className="box-1">
        <div className="left">
          <input
            className="rounded-md px-8 ms-8"
            type="text"
            placeholder="Search here"
          />
        </div>
        <div style={{ flexGrow: 1 }}></div>
        <div className="me-8  flex">
          <img className="moneybag" src={money} />
          <img className="moneybag" src={money} />
          <img className="moneybag" src={money} />
          <img className="moneybag" src={money} />
          <div className="flex  me-8">
            <span className="text-red-400">Gold</span>
            <img className="moneybag" src={graph} />
            <div className="buy">
              <span>Buy:7390.00</span>
              <span>Buy:7657.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="box-2 flex">
        <div className="name  place-items-start ms-8 max-w-md p-5 bg-slate-100 ">
          <h2 className="text-3xl">Hello Ayush !</h2>
          <p className="mt-3">You have 134 conusmer this week</p>
          <div className=" space-x-2 mt-3 ">
            <button className="  rounded-full border-2 border-black  bg-black text-white p-1 px-3">
              Add consumer
            </button>
            <button className="border-black rounded-full border-2 p-1 ">
              Manage consumer
            </button>
            {/* <img src={working} className="h-50 w-50" /> */}
          </div>
        </div>
        <div className="kyc m-7 mx-8 bg-orange-300 h-full ">
          <p>
            you have <span className="text-3xl">236</span>
          </p>
          <p>KYC approval pending</p>
          <button className="view-list bg-black text-white rounded-md p-1 ">View list</button>
        </div>
      </div>
    </div>
  );
};

export default Page1;
