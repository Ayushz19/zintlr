import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Page2 from "../src/Components/Page2";
import Page1 from "../src/Components/Page1";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from '../src/Components/Navbar'
import dashboard from '../src/Components/dashboard.png'
import './App.css';

const router = createBrowserRouter([
  {
    path: "/add",
    element: <Page2></Page2>,
  },
  {
    path:'/',
    element:<Page1></Page1>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <div  className='main-container'>
      <Navbar  li={[
        ["Dashboard", dashboard],
        ["Bullion Operation", dashboard],
        ["Transaction", dashboard],
        ["Your Network", dashboard],
        ["Other Operation", dashboard],
        ["Manage Bank Account", dashboard],
        ["FAQ", dashboard],
        ["Customize Dashboard", dashboard]
      ]} />
      <RouterProvider router={router} />
      {/* <Page2 /> */}
      
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
