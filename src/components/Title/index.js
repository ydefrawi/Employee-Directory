import React from "react";
import "./style.css";
const picard = require('picard-quotes');

let randomQuote = picard.quote((quote) => {
  return quote;
});


function Title(props) {
  return (
 
  <div className = "hero fade-in-image"> 
 
    <div className="px-4 py-5 my-5 text-center">
        <img className="d-block mx-auto mb-4 emblem" src="https://png2.cleanpng.com/sh/f9ee65c02a3cf1bc7a9cabcc8b3b4c52/L0KzQYm4UcEzN5l9g5H0aYP2gLBuTgN1aaNrhNdudD32hLL5TgRzbZwyjdDydHXnPbfshPVzaaVuh9C2b3awgL3ojvV1e15xRadrZUm1RYW4hcdnQWo3Rqg5NEm0R4W8UcU1OmE1TqIDMUm4QIO1kP5o/kisspng-starfleet-star-trek-united-federation-of-planets-l-5be92541e7f992.6049174515420060819502.png" alt="" width="72" height="57"/>
        <h1 className="title">Employee Directory</h1>
        <div className="col-lg-6 mx-auto">
        <h5 id = "picardQuote">"{randomQuote.quote}"</h5>
    <h6 id="picard">-Jean-Luc Picard</h6>

        </div>
      </div>

    

  </div>
  )
}

export default Title;
