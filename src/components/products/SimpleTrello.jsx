import React from "react";
import Modal from "../Modal";
import simpleTrelloImage from "../../images/simpleTrelloImage.png";

export const SimpleTrello = (props) => {
  const simpleTrelloComment ="タスク管理アプリ：「SimpleTrello」\n言語:React.js デプロイ:Vercel"
  return (
    <div className="productContent">
      <button
        className="simpleTrelloImage productImage"
        onClick={() => props.setShow({ type: "simpletrello" })}
      ></button>
      <p>Simple Trello</p>
      {props.show.simpletrello && (
        <Modal
          show={props.show}
          setShow={props.setShow}
          title="Simple Trello"
          content={simpleTrelloComment}
          link="https://simple-trello-ruby.vercel.app/"
          image={simpleTrelloImage}
          gitLink="https://github.com/kitaharas/Simple_Trello"
        />
      )}
    </div>
  );
};
