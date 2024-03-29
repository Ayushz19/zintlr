/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Slide from "@mui/material/Slide";
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import money from "./money.png";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";


const uData = [4000, 3000, 2000, 2780, 1890, 2390];
const pData = [2400, 1398, 9800, 3908, 4800, 3800];
const xLabels = ["1", "2", "3", "4", "5"];

const chartSetting = {
  xAxis: [
    {
      label: "number of consumer",
    },
  ],
  width: 250,
  height: 150,
};
const dataset = [
  {
    london: 60,
    paris: 63,
    newYork: 103,
    seoul: 144,
    month: "very active",
  },
  {
    london: 59,
    paris: 60,
    newYork: 105,
    seoul: 319,
    month: "moderately active",
  },
  {
    london: 65,
    paris: 60,
    newYork: 106,
    seoul: 249,
    month: "least active",
  },
];

const style = {
  position: "absolute",
  top: "0%",
  right: "0%",

  height: "100%",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 100,
  p: 2,
};

export default function TransitionsModal({ open, setOpen }) {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Slide in={open} direction="left">
        <Box sx={style}>
          <div className="slide-container mt-[-10px] mx-[-15px]">
            <div className="flex">
              {" "}
              <div className="first-row name mt-0 flex">
                <h2 className="text-lg">Raghuvendra Raga </h2>
                <svg
                  className="mx-3 mt-0"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="2em"
                  width="2em"
                >
                  <path d="M8 4a.5.5 0 01.5.5V6a.5.5 0 01-1 0V4.5A.5.5 0 018 4zM3.732 5.732a.5.5 0 01.707 0l.915.914a.5.5 0 11-.708.708l-.914-.915a.5.5 0 010-.707zM2 10a.5.5 0 01.5-.5h1.586a.5.5 0 010 1H2.5A.5.5 0 012 10zm9.5 0a.5.5 0 01.5-.5h1.5a.5.5 0 010 1H12a.5.5 0 01-.5-.5zm.754-4.246a.389.389 0 00-.527-.02L7.547 9.31a.91.91 0 101.302 1.258l3.434-4.297a.389.389 0 00-.029-.518z" />
                  <path
                    fillRule="evenodd"
                    d="M0 10a8 8 0 1115.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 010 10zm8-7a7 7 0 00-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 008 3z"
                  />
                </svg>
                <div className="two-buttons">
                  <div className="">
                    <button className="bg-red-200 rounded-lg pl-2 pr-2   text-red-700">
                      KYC pending
                    </button>
                    <div>
                      <button className="bg-black text-white pl-2 pr-2 rounded-sm">
                        Verify
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="info float-right mt-[-50px]  ">
              <h2 className="leading-relaxed">Initiated</h2>
              <p className="leading-relaxed">Thu Apr 29</p>
              <p className="leading-relaxed">14:27:07 IST 2021</p>
            </div>
            <div className="row2 mt-10 flex justify-between bg-green-200 w-[100%] p-3">
              <div>2 Active tickets</div>
              <div className="float-right">
                <button className="bg-black text-white p-1">
                  View ticket history
                </button>
              </div>
            </div>
            <div className="names mt-2 mx-3 flex justify-between border-2 border-stone-400">
              <div className="">
                <p className="text-[9px]">B2B field executive</p>
                <h2>Arun Jha</h2>
              </div>
              <div className="">
                <p className="text-[9px]">B2B field executive</p>
                <h2>Arun Jha</h2>
              </div>
              <div className="">
                <p className="text-[9px]">B2B field executive</p>
                <h2>Arun Jha</h2>
              </div>
              <div className="bg-red-200 p-3">
                <p className="text-red-700 text-[12px]">start chat with </p>
                <p>Raghuvendra</p>
                <button className="bg-black text-white pl-2 pr-2 rounded-md">
                  {" "}
                  Chat
                </button>
              </div>
            </div>
            <div className="trans mx-6 flex justify-between mt-4 border-1 border-stone-200">
              <h2 className="text-lg">Last transction </h2>

              <p className="text-blue-700 text-[12px]">View All Transction</p>
            </div>
            <div className="money mx-5 flex justify-between mt-2 border-stone-200 border-2 p-1">
              <div className="trans-id">
                <p>Money Added</p>
                <p className="text-sm">Transction id</p>
                <p className="text-xs">Thu Ape 29 17:57:29 IST 2021</p>
              </div>
              <div className="amnt">
                <h1 className="text-lg">+7390.00</h1>
                <button className="bg-green-300 rounded-md pl-1 pr-1">
                  Success
                </button>
              </div>
            </div>
            <div className="money-container mt-2 p-2">
              <div className="wallet-1 flex justify-between p-2 border-2 border-stone-400">
                <div className="flex">
                  <div>
                    <img src={money} className="moneybag " />
                  </div>
                  <div className="">
                    TryCard Cash Wallet
                    <p className="text-blue-700 text-[12px]">Wallet History</p>
                  </div>
                </div>
                <div className="amana float-right ">
                  <p className="text-lg  ">13,2131</p>
                </div>
              </div>
              <div className="wallet-1 flex justify-between p-2 border-2 border-stone-400">
                <div className="flex">
                  <div>
                    <img src={money} className="moneybag " />
                  </div>
                  <div className="">
                    TryCard Cash Wallet
                    <p className="text-blue-700 text-[12px]">Wallet History</p>
                  </div>
                </div>
                <div className="amana float-right ">
                  <p className="text-lg  ">13,2131</p>
                </div>
              </div>
              <div className="wallet-1 flex justify-between p-2 border-2 border-stone-400">
                <div className="flex">
                  <div>
                    <img src={money} className="moneybag " />
                  </div>
                  <div className="">
                    TryCard Cash Wallet
                    <p className="text-blue-700 text-[12px]">Wallet History</p>
                  </div>
                </div>
                <div className="amana float-right ">
                  <p className="text-lg  ">13,2131</p>
                </div>
              </div>
            </div>
            <div className="graphs-2 mx-4">
                <h1>Activity Overview</h1>
                <div className="earning-right ">
                    <LineChart
                      className=""
                      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                      series={[
                        {
                          data: [2, 5.5, 2, 8.5, 1.5, 5],
                        },
                      ]}
                      width={250}
                      height={150}
                    />
                    </div>
                    <div className="">
                    <BarChart
              width={415}
              height={250}
              series={[
                { data: pData, label: "revenue", id: "pvId" },
                { data: uData, label: "transaction ", id: "uvId" },
              ]}
              xAxis={[{ data: xLabels, scaleType: "band" }]}
            />
              </div>
            </div>
          </div>
        </Box>
      </Slide>
    </Modal>
  );
}
