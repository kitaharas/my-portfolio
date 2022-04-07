import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../services/useMediaQuery";
import { stack as Humberger } from "react-burger-menu";

const LAPTOP_WIDTH = 651;

export default function Menu() {
  
  const isLaptop = useMediaQuery(LAPTOP_WIDTH, "min");
  return (
    <>
      {isLaptop && (
        <>
          <div className="headerRight">
            <Link to="/">home</Link>
            <Link to="/page2">製作物紹介</Link>
            <Link to="/page3">Page3</Link>
          </div>
        </>
      )}
      {!isLaptop && (
        
          <Humberger right >
            <Link to="/">home</Link>
            <Link to="/page2">製作物紹介</Link>
            <Link to="/page3">Page3</Link>
          </Humberger>
        
      )}
    </>
  );
};
