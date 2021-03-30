import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  VKShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  VKIcon,
  FacebookIcon,
  TwitterIcon,
} from "react-share";

function ShareButtons({
  qText,
  qAuthor,
  onClick,
  dynamicColor,
  onAnimationEnd,
}) {
  const quote = `"${qText}" \n-${qAuthor}`;
  const urlParam = "https://randomquotez.herokuapp.com/";
  return (
    <div className="row">
      <div id="share-buttons">
        <span title="Share it on Fb">
          <FacebookShareButton url={urlParam} quote={quote}>
            <FacebookIcon size={33} round />
          </FacebookShareButton>
        </span>
        <span title="Tweet this Quote!">
          <TwitterShareButton url={urlParam} title={quote}>
            <TwitterIcon size={33} round />
          </TwitterShareButton>
        </span>
        <span title="Share it with someone">
          <WhatsappShareButton url={urlParam} title={quote}>
            <WhatsappIcon size={33} round />
          </WhatsappShareButton>
        </span>
        <span title="Share it on VK">
          <VKShareButton url={urlParam} title={quote}>
            <VKIcon size={33} round />
          </VKShareButton>
        </span>
      </div>
      <div className="new-quote">
        <button
          style={{ background: dynamicColor, color: "white" }}
          onClick={onClick}
          onAnimationEnd={onAnimationEnd}
          id="btn-quote"
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default ShareButtons;
