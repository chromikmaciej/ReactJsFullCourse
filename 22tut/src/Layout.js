import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

const Layout = ({ search, setSearch, width }) => {
  return (
    <div className="App">
      <Header title="React JS Blog" />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
