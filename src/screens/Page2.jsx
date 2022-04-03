import React, { useReducer } from "react";
import { Imhere } from "../components/products/Imhere";
import { Portfolio } from "../components/products/Portfolio";
import { SimpleTrello } from "../components/products/SimpleTrello";
// import { useState } from "react";
import { modalreducer } from "../components/services/useCustomState";

export default function Page2() {
  const [show, setShow] = useReducer(modalreducer, {
    imhere: false,
    portfolio: false,
    simpletrello: false,
  });
  return (
    <>
      <div className="mainContents">
        <p>製作物を掲載します</p>
        <div className="productPage">
          <Imhere show={show} setShow={setShow} />
          <SimpleTrello show={show} setShow={setShow} />
          <Portfolio show={show} setShow={setShow} />
        </div>
      </div>
    </>
  );
}
