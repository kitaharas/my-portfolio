import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../services/useMediaQuery";

const LAPTOP_WIDTH = 651;

export const Humberger = () => {
  const isLaptop = useMediaQuery(LAPTOP_WIDTH, "min");

  // const humbergerOverlay = () => {
  //   const ol = document.querySelector(".HumbergerOverlay");
  //   ol.classList.toggle("show");
  //   document.querySelector(".HumbergerMenuIcon").classList.toggle("menu-open");
  //   if (ol.classList.contains("show") === false) {
  //     dts.forEach((dt) => {
  //       dt.parentNode.classList.remove("appear");
  //     });
  //   }
  // };

  // const dts = document.querySelectorAll("dt");
  // dts.forEach((dt) => {
  //   dt.addEventListener("click", () => {
  //     dt.parentNode.classList.toggle("appear");

  //     dts.forEach((el) => {
  //       if (dt !== el) {
  //         el.parentNode.classList.remove("appear");
  //       }
  //     });
  //   });
  // });

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
        <>
          {/* <button class="HumbergerMenuIcon" onClick={humbergerOverlay()}> */}
            {/* <span></span>
            <span></span>
            <span></span>
          </button>
          <div class="HumbergerOverlay">
            <nav>
              <ul>
                <li>
                  <dl>
                    <dt class="openAco">
                      <a href="#">会社概要</a>
                    </dt>
                    <dd>aaa</dd>
                    <dd>aaa</dd>
                    <dd>aaa</dd>
                  </dl>
                </li>

                <li>
                  <dl>
                    <dt class="openAco">
                      <a href="#">事業説明</a>
                    </dt>
                    <dd>aaa</dd>
                    <dd>aaa</dd>
                    <dd>aaa</dd>
                  </dl>
                </li>

                <li>
                  <dl>
                    <dt class="openAco">
                      <a href="#">採用情報</a>
                    </dt>
                    <dd>aaa</dd>
                    <dd>aaa</dd>
                    <dd>aaa</dd>
                  </dl>
                </li>

                <li>
                  <a href="#">アクセス</a>
                </li>
                <li>
                  <a href="#">お問合せ</a>
                </li>
              </ul>
            </nav>
          </div> */}
        </>
      )}
    </>
  );
};
