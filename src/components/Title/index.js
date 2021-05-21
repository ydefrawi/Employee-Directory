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
        <img onClick={() => play(!isPlaying)} className="d-block mx-auto emblem" style={style} src="https://png2.cleanpng.com/sh/b9cb074f6a4e81c7fafe5703ad20f630/L0KzQYm3V8A2N5DokJH0aYP2gLBuTgN1aaMyjORuaz32hLL5hvxmbaUyetNtZ3Wwc7F0jgVvcZRmjNH7LXnxg7bujvEue6Vmip99cnXuPcTqifVva5YyTdQ8ZUHldbPoWMZjPGUzSKU8MkWzQYe4VcMxP2o8SKUANki8SXB3jvc=/kisspng-star-trek-starfleet-badge-communicator-insegna-star-trek-science-5b3e1beba86b44.0332501615307970356899.png" alt="" width="72" height="57" />

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
