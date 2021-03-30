import React, { Component } from "react";
import { getQuotes } from "../httpService/quotesService";
import QuoteText from "./QuoteText";
import ShareButtons from "./ShareButtons";
import CypherText from "react-cypher-text-loop";

class Quotes extends Component {
  state = {
    quotes: [
      {
        text: "",
        author: "",
      },
    ],
    quoteIndex: 0,
    dynamicColor: "#16a085",
    fade: false,
  };

  colors = [
    "#16a085",
    "#2c3e50",
    "#f39c12",
    "#27ae60",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];

  getQuoteIndex = () => Math.floor(Math.random() * this.state.quotes.length);
  getRandomQuote = () => {};

  async componentDidMount() {
    const { data } = await getQuotes();
    this.setState({ quotes: data, quoteIndex: this.getQuoteIndex() });
  }

  handleClick = () => {
    this.setState({ fade: true });
    const dynamicColor = this.colors[
      Math.floor(Math.random() * this.colors.length)
    ];

    this.setState({
      quoteIndex: this.getQuoteIndex(),
      dynamicColor,
    });
  };

  handleAnimationEnd = () => {
    this.setState({ fade: false });
  };

  render() {
    const { quoteIndex, quotes, dynamicColor, fade } = this.state;
    let cypherArray = [
      `Check Your Lucky Quote For The Day!`,
      `Keep Going Till You Find It`,
      `There Are More Than 26K Quote!`,
      `It's Totally Random...`,
    ];
    const { text: qText, author: qAuthor } = quotes[quoteIndex];
    document.body.style = `background:${dynamicColor} `;

    return (
      <div
        id="quote-box"
        style={{
          color: `${dynamicColor}`,
          fontSize: 18,
          fontWeight: "bold",
        }}
        className=" shadow p-3 mb-5 bg-white"
      >
        <span
          className="cypherArray"
          style={{ fontSize: 18, transitionDuration: 1 }}
        >
          <CypherText delay={12000} textList={cypherArray} />
        </span>

        <div
          className={fade ? "fade" : ""}
          onAnimationEnd={this.handleAnimationEnd}
        >
          <QuoteText quotes={quotes} index={quoteIndex} />
        </div>

        <div id="buttonsBlock">
          <ShareButtons
            qAuthor={qAuthor}
            qText={qText}
            onClick={this.handleClick}
            dynamicColor={dynamicColor}
          />
        </div>
      </div>
    );
  }
}

export default Quotes;
