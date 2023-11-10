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
      <div className="box-2 flex  justify-between gap-3">
        <div className="name  flex place-items-start ms-8  p-5 bg-slate-100 ">
          <div>
            <h2 className="text-3xl">Hello Ayush !</h2>
            <p className="mt-3">You have 134 conusmer this week</p>
            <div className=" space-x-2 mt-3 flex    ">
              <button className="  rounded-full border-2 border-black  bg-black text-white p-1 px-3">
                Add consumer
              </button>
              <button className="border-black rounded-full border-2 p-1 ">
                Manage consumer
              </button>
            </div>
          </div>
          <img src={working} className="h-[6rem]  ml-10" />
        </div>
        <div className="kyc  bg-orange-200 grow p-5  rounded-lg">
          <p>
            you have <span className="text-3xl">236</span>
          </p>
          <p>KYC approval pending</p>
          <button className="view-list bg-black text-white rounded-md p-1 ">
            View list
          </button>
        </div>
        <div className="kyc  bg-pink-200 grow p-5 rounded-lg">
          <p>
            you have <span className="text-3xl">236</span>
          </p>
          <p>KYC approval pending</p>
          <button className="view-list bg-black text-white rounded-md p-1 ">
            View list
          </button>
        </div>
        <div className="kyc  bg-violet-200 grow  p-5 rounded-lg ">
          <p>
            you have <span className="text-3xl">236</span>
          </p>
          <p>KYC approval pending</p>
          <button className="view-list bg-black text-white rounded-md p-1 ">
            View list
          </button>
        </div>
      </div>
      <h3 className="overview mt-4  mx-8 font-bold">Customer Overview</h3>
      <div className="outer-box-3 mt-1 flex  ">
        <div className="box-3 flex mt-1 m-8 px-8 bg-indigo-100  h-32 rounded-lg   ">
          <div className="mt-8">
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="4em"
              width="4em"
            >
              <path d="M336 256c-20.56 0-40.44-9.18-56-25.84-15.13-16.25-24.37-37.92-26-61-1.74-24.62 5.77-47.26 21.14-63.76S312 80 336 80c23.83 0 45.38 9.06 60.7 25.52 15.47 16.62 23 39.22 21.26 63.63-1.67 23.11-10.9 44.77-26 61C376.44 246.82 356.57 256 336 256zm66-88zM467.83 432H204.18a27.71 27.71 0 01-22-10.67 30.22 30.22 0 01-5.26-25.79c8.42-33.81 29.28-61.85 60.32-81.08C264.79 297.4 299.86 288 336 288c36.85 0 71 9 98.71 26.05 31.11 19.13 52 47.33 60.38 81.55a30.27 30.27 0 01-5.32 25.78A27.68 27.68 0 01467.83 432zM147 260c-35.19 0-66.13-32.72-69-72.93-1.42-20.6 5-39.65 18-53.62 12.86-13.83 31-21.45 51-21.45s38 7.66 50.93 21.57c13.1 14.08 19.5 33.09 18 53.52-2.87 40.2-33.8 72.91-68.93 72.91zM212.66 291.45c-17.59-8.6-40.42-12.9-65.65-12.9-29.46 0-58.07 7.68-80.57 21.62-25.51 15.83-42.67 38.88-49.6 66.71a27.39 27.39 0 004.79 23.36A25.32 25.32 0 0041.72 400h111a8 8 0 007.87-6.57c.11-.63.25-1.26.41-1.88 8.48-34.06 28.35-62.84 57.71-83.82a8 8 0 00-.63-13.39c-1.57-.92-3.37-1.89-5.42-2.89z" />
            </svg>
          </div>
          <div className="mx-6 mt-8">
            <p>Total Customer</p>
            <p className="text-3xl "> 1,342</p>
          </div>
        </div>
        <div className="white-box mt-4 gap-y-2.5">
          <div className="direct flex">
            Direct Consumers
            <svg
              className="mt-[6px] mx-2"
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" />
            </svg>
            <span className="mx-8 mt-[2px]">342</span>
          </div>
          <div className="direct flex">
            Through Associates
            <svg
              className="mt-[6px] mx-2"
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" />
            </svg>
            <span className="mx-8 mt-[2px]">342</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
