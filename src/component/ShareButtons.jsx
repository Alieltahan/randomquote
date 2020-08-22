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
    <div title="Share it on Fb" className="row">
      <div id="share-buttons" className="col">
        <span className="button-padding">
          <FacebookShareButton url={urlParam} quote={quote}>
            <FacebookIcon size={33} round />
          </FacebookShareButton>
        </span>
        <span title="Tweet this Quote!" className="button-padding">
          <TwitterShareButton url={urlParam} title={quote}>
            <TwitterIcon size={33} round />
          </TwitterShareButton>
        </span>
        <span title="Share it with someone" className="button-padding">
          <WhatsappShareButton url={urlParam} title={quote}>
            <WhatsappIcon size={33} round />
          </WhatsappShareButton>
        </span>
        <span title="Share it on VK" className="button-padding">
          <VKShareButton url={urlParam} title={quote}>
            <VKIcon size={33} round />
          </VKShareButton>
        </span>
      </div>

      <div id="new-quote" className="col-5">
        <button
          style={{ background: dynamicColor, color: "white" }}
          onClick={onClick}
          onAnimationEnd={onAnimationEnd}
          className="text-right btn m-1"
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default ShareButtons;
