import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../services/useMediaQuery";
import { stack as Menu } from "react-burger-menu";

const LAPTOP_WIDTH = 651;

export default props => {
  
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
        
          <Menu right {...props}>
            <Link to="/">home</Link>
            <Link to="/page2">製作物紹介</Link>
            <Link to="/page3">Page3</Link>
          </Menu>
        
      )}
    </>
  );
};
