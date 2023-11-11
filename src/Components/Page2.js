import React from "react";
import "./Page1.css";
import money from "./money.png";
import graph from "./graph.png";
import working from "./working.png";

const data = [
    {
        name: "Raghav",
        number: 3,
        assets: {
            number: 23424,
            gold: 232,
            silver: 834.2,
            blue:978
        },
        revenue: 32543,
        kyc_status: "done",
        facilator: {
            from: {
                name: "Ankita",
                rank: "b2b field"
            },
            to: {
                name: "jbcsuub",
                rank: "b2b field"
            }
        },
        zone: "south",
        account_type: "Buisness",
        tpa: "klnblysuf"
    },
    {
        name: "Raghav",
        number: 3,
        assets: {
            number: 23424,
            gold: 232,
            silver: 834.2,
            blue:978
        },
        revenue: 32543,
        kyc_status: "pending    ",
        facilator: {
            from: {
                name: "Ankita",
                rank: "b2b field"
            },
            to: {
                name: "jbcsuub",
                rank: "b2b field"
            }
        },
        zone: "south",
        account_type: "Pay And Use",
        tpa: "876328264872@trucard"
    },
    {
        name: "Raghav",
        number: 3,
        assets: {
            number: 23424,
            gold: 232,
            silver: 834.2,
            blue:978
        },
        revenue: 32543,
        kyc_status: "done",
        facilator: {
            from: {
                name: "Ankita",
                rank: "b2b field"
            },
            to: {
                name: "jbcsuub",
                rank: "b2b field"
            }
        },
        zone: "south",
        account_type: ";hyfef",
        tpa: "9874579359@trucard"
    },
    // {
    //     name: "Raghav",
    //     number: 3,
    //     assets: {
    //         number: 23424,
    //         gold: 232,
    //         silver: 834.2,
    //         blue:978
    //     },
    //     revenue: 32543,
    //     kyc_status: "pending",
    //     facilator: {
    //         from: {
    //             name: "Ankita",
    //             rank: "b2b field"
    //         },
    //         to: {
    //             name: "jbcsuub",
    //             rank: ";johi"
    //         }
    //     },
    //     zone: "south",
    //     account_type: ";hyfef",
    //     tpa: "klnblysuf"
    // }
]

const Page2 = () => {
  return (
    <div className="container">
      <div className="box-1">
        <div className="left">
          <input
            className="rounded-md px-8 ms-8 border-neutral-200 p-3 border-2"
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
            <div className="buy mt-[5px]">
              <span>Buy:7390.00</span>
              <span>Buy:7657.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="box-2 flex  justify-between gap-3">
        <div className="name  flex place-items-start ms-8  p-5 bg-slate-100 ">
          <div>
            {/* <h2 className="text-3xl">Hello Ayush !</h2>
            <p className="mt-3">You have 134 conusmer this week</p> */}
            <p className="text-blue-600">Consumer Manage Consumer</p>
            <h3 className="font-bold">Actions</h3>
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
      <h2 className="mt-6 mx-8 text-xl">Consumers Overview</h2>
      <div className="flex justify-between">
        <input
          className="rounded-md px-8 ms-8 border-neutral-200 p-1 border-2 mt-2"
          type="text"
          placeholder="Search consumers"
        />
        <div className="filter flex">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="2.6em"
            width="2.6em"
          >
            <path d="M10 11H7.101l.001-.009a4.956 4.956 0 01.752-1.787 5.054 5.054 0 012.2-1.811c.302-.128.617-.226.938-.291a5.078 5.078 0 012.018 0 4.978 4.978 0 012.525 1.361l1.416-1.412a7.036 7.036 0 00-2.224-1.501 6.921 6.921 0 00-1.315-.408 7.079 7.079 0 00-2.819 0 6.94 6.94 0 00-1.316.409 7.04 7.04 0 00-3.08 2.534 6.978 6.978 0 00-1.054 2.505c-.028.135-.043.273-.063.41H2l4 4 4-4zm4 2h2.899l-.001.008a4.976 4.976 0 01-2.103 3.138 4.943 4.943 0 01-1.787.752 5.073 5.073 0 01-2.017 0 4.956 4.956 0 01-1.787-.752 5.072 5.072 0 01-.74-.61L7.05 16.95a7.032 7.032 0 002.225 1.5c.424.18.867.317 1.315.408a7.07 7.07 0 002.818 0 7.031 7.031 0 004.395-2.945 6.974 6.974 0 001.053-2.503c.027-.135.043-.273.063-.41H22l-4-4-4 4z" />
          </svg>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="2.6em"
            width="2.6em"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M2.859 2.877l12.57-1.795a.5.5 0 01.571.495v20.846a.5.5 0 01-.57.495L2.858 21.123a1 1 0 01-.859-.99V3.867a1 1 0 01.859-.99zM4 4.735v14.53l10 1.429V3.306L4 4.735zM17 19h3V5h-3V3h4a1 1 0 011 1v16a1 1 0 01-1 1h-4v-2zm-6.8-7l2.8 4h-2.4L9 13.714 7.4 16H5l2.8-4L5 8h2.4L9 10.286 10.6 8H13l-2.8 4z" />
          </svg>
          <svg fill="none" viewBox="0 0 24 24" height="2.6em" width="2.6em">
            <path
              fill="currentColor"
              d="M7 18h10v-2H7v2zM17 14H7v-2h10v2zM7 10h4V8H7v2z"
            />
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M6 2a3 3 0 00-3 3v14a3 3 0 003 3h12a3 3 0 003-3V9a7 7 0 00-7-7H6zm0 2h7v5h6v10a1 1 0 01-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1zm9 .1A5.009 5.009 0 0118.584 7H15V4.1z"
              clipRule="evenodd"
            />
          </svg>
          <svg viewBox="0 0 1024 1024" fill="#00f" height="2.6em" width="2.6em">
            <path d="M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z" />
          </svg>
        </div>
      </div>
      <div className="Table mt-6 mx-5">
        <table className="table-fixed  w-[100%] border-spacing-2 flex-col  ">
          <thead className="bg-blue-200">
            <th>Costumer Name</th>
            <th>Assets</th>
            <th>Revenue</th>
            <th>KYC Status</th>
            <th>Facilator</th>
            <th>Zone</th>
            <th>Account Type</th>
            <th>TPA</th>
          </thead>
          <tbody>
            {
                data.map(elem =>  <tr>
                    <td className="text-center whitespace-nowrap text-blue-700">
                      {elem.name}
                      <span className="bg-red-400 text-[10px] rounded-lg mx-2 text-white p-1">
                        {elem.number}
                      </span>
                    </td>
                    <td className="text-center ">
                      {elem.assets.number}
                      <div className="flex text-center gap-2 mx-4  ">
                        <button className="bg-amber-200 rounded-lg text-amber-700 text-[12px] pl-1 pr-1">
                          {elem.assets.gold}g
                        </button>
                        <button className="bg-zinc-300 rounded-lg text-zinc-700 text-[12px] pl-1 pr-1">
                          {elem.assets.silver}
                        </button>
                        <button className=" rounded-lg bg-cyan-300 text-cyan-700 text-[12px]  pl-1 pr-1">
                          {elem.assets.blue}
                        </button>
                      </div>
                    </td>
                    <td className="text-center">{elem.revenue}</td>
                    <td className="text-center">
                      {
                        elem.kyc_status === "done" ? <button className="bg-green-300 rounded-lg pl-2 pr-2  mt-4 text-green-700">
                        Done
                      </button> : <button className="bg-red-300 rounded-lg pl-2 pr-2  mt-4 text-red-700">
                  Pending
                </button>
                      }
                    </td>
                    <td className="text-center">
                      <div className="flex gap-4">
                        <div>
                          <p className="text-[8px] whitespace-nowrap">
                        {elem.facilator.from.rank}
                          </p>
                          <p className="whitespace-nowrap">{elem.facilator.from.name}</p>
                        </div>
                        <div>
                          <p className="text-[8px]">{elem.facilator.to.rank}</p>
                          <p className=" whitespace-nowrap">{elem.facilator.to.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">{elem.zone}</td>
                    <td className="text-center">{elem.account_type}</td>
                    <td className="text-center">{elem.tpa}</td>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page2;
