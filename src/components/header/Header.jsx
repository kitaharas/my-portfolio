import React from "react";
import { Route, Routes } from "react-router-dom";
import Page1 from "../../screens/Page1";
import Page2 from "../../screens/Page2";
import Page3 from "../../screens/Page3";
import Menu from "./Menu";

export default function Header() {
  return (
    <>
      <div className="header">
        <h1 className="headerTitle">Kitaharaのポートフォリオサイト</h1>
        <Menu width={250}/>
      </div>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </>
  );
}
