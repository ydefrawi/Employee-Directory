import React, { useState, useEffect } from "react";
import { Animate, useAnimateKeyframes } from "react-simple-animate";
import "./style.css";
const picard = require('picard-quotes');


function Title() {
//initializes quote to "Engage"
  const [quote, setQuote] = useState("Make it so.")

//hook for animation
  const { play, style, isPlaying } = useAnimateKeyframes({
    iterationCount: "2",
    direction: "alternate",
    duration: 0.24,
    keyframes: [
      "transform: scale(1)",
      "transform: scale(1.4)",
      "transform: scale(1)"
    
    ]
  });


//renders a new quote to the virtual dom every 7 seconds
  useEffect(() => {
    setInterval(newQuote, 7000)
  }, [])

//grabs a new quote from the picard node package
  const newQuote = async () => {
    let randomQuote = await picard.quote((result) => {
      return result.quote;
    })
    setQuote(randomQuote)
  }


  return (
    <div className="hero fade-in-image">
      <div className="px-4 py-2 my-2 text-center">
        <img onClick={() => play(!isPlaying)} className="d-block mx-auto emblem" style={style} src="https://png2.cleanpng.com/sh/ba73c7ea284cd7a742a250aa39b20e28/L0KzQYm4UMI2N5Doh5H0aYP2gLBuTfxwb5CyiAZqcj33grbyTgN1aaNrhNdudD3mf770gf5lNZZyet5ubT32hLL5hvxmbaUye9H2bXHxdH65UsUue155gNc2c4Tkgn77kvVsNZVqi9twbj3zgrE0VfJlOZU5Uac8YUnkdoi1U8MxOGU7UKQ6NUSzRIiBUcAyOmU1SZD5bne=/kisspng-logo-star-trek-starfleet-command-emblem-starfleet-command-225-s-the-star-trek-design-pro-5bd1d4953a9af7.3300468215404781012401.png" alt="" />

        <Animate
          play start = {{
            opacity:0,
          }}
          end={{opacity:1}}
          delay={0}
          duration={0.9}
          iterationCount={3}
          easeType={"easeInSine"}
          >
          <h1 className="title">Employee Directory</h1>
        </Animate>

        <div className="col-lg-6 mx-auto">
          <Animate
            play start={{ opacity: 0 }}
            end={{ opacity: 1 }}
            duration={3}
            delay={0.3}>
            <h5 id="picardQuote">"{quote}"</h5>
            <h6 id="picard">Jean-Luc Picard</h6>
          </Animate>
        </div>
      </div>
    </div>
  )
}

export default Title;
