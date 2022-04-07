import React from "react";

const Modal = (props) => {
  return (
    <>
      <div className="overlay">
        <div className="modalContent">
          <img src={props.image} className="modalThumbnail" alt="サービス画面"/>
          <p className="appliArticle">{props.content}</p>
          <div className="modalLinkGroup">
            <a
              className="linkUrl"
              href={props.link}
              target="_blank"
              rel="noreferrer"
            >
              サイトはこちら→　{props.title}
            </a>
            <a
              className="gitLinkUrl"
              href={props.gitLink}
              target="_blank"
              rel="noreferrer"
            >
              GitHubページ
            </a>
          </div>
          <button
            className="closeBtn"
            onClick={() => props.setShow({ type: "close", title: props.title })}
          >
            戻る
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
