import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <>
      <ToastContainer />
      <Header />

      <div style={{ marginTop: "75px" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
