import React from "react";
import Modal from "../Modal";
import imhereImage from "../../images/imhereImage.png";

export const Imhere = (props) => {
  const imhereComment = "イベントマッチングアプリ「Im here!」\n言語:Ruby on Rails デプロイ:AWS"
  return (
    <div className="productContent">
      <button
        className="imhereImage productImage"
        onClick={() => props.setShow({type: "imhere" })}
      ></button>
      <p>I'm here!</p>
      {props.show.imhere && (
        <Modal
          show={props.show}
          setShow={props.setShow}
          title="I'm here!"
          content={imhereComment}
          link="http://imhere.place/"
          image={imhereImage}
          gitLink="https://github.com/kitaharas/Im_here"
        />

      )}
    </div>
  );
};
