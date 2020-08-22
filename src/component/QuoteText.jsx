import React, { Component } from "react";

class QuoteText extends Component {
  render() {
    const { quotes, index } = this.props;
    return (
      <div>
        <div id="text" className="text-center">
          <span
            className="fa fa-quote-left quoteText"
            aria-hidden="true"
          ></span>{" "}
          {quotes[index].text}
          <span className="fa fa-quote-right" aria-hidden="true"></span>
        </div>
        <div id="author" className="quoteAuthor text-md-right">
          <i> - {quotes[index].author}</i>
        </div>
      </div>
    );
  }
}

export default QuoteText;
