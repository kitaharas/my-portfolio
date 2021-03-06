import React from "react";
import Modal from "../Modal";
import portfolioImage from "../../images/picture.jpg";

export const Portfolio = (props) => {
  return (
    <div className="productContent">
      <button
        className="portfolioImage productImage"
        onClick={() => props.setShow({ type: "portfolio" })}
      ></button>
      <p>kitaharaのポートフォリオサイト</p>
      {props.show.portfolio && (
        <Modal
          show={props.show}
          setShow={props.setShow}
          title="ポートフォリオサイト"
          content="製作物紹介サイト：React.js で作成 デプロイ:vercel"
          link="https://my-portfolio-umber-psi.vercel.app/"
          image={portfolioImage}
          gitLink="https://github.com/kitaharas/my-portfolio"
        />
      )}
    </div>
  );
};
