import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router";
import UserTable from "./components/UserTable/UserTable";
import UserInfo from "./components/UserInfo";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route index element={<UserTable/>} />
    <Route path=":id" element={<UserInfo />} />
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);