import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./index.css";

// hydrate
// 在初次渲染的时候，去复用原本已经存在的 DOM 节点，
// 减少重新生成节点以及删除原本 DOM 节点的开销，来加速初次渲染的功能
ReactDOM.hydrate(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("app"),
);
