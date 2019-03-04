import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { animateElement, animateClass, animateText, samples } from "../lib";


const Logo = function () {

    return (
        <h1
            className={animateClass({
                frames: {
                    from: {
                        // clipPath: "inset(0px 0px 200px 0px)",
                    },
                    to: {
                        // clipPath: "inset(0px 0px 0px 0px)",
                    }
                }
            })}
            style={{
                fontFamily: "Anton",
                fontWeight: "normal",
                fontSize: "10vw",
                textAlign: "center",
            }}>
            {animateText("React", samples.emphasis.jello(), 0)}
            {animateText("Punch", samples.text.gradient())}
        </h1 >
    )
}

function Documentation() {
    return (
        <div>
            <Logo />
            <div className={animateClass(samples.border.draw("red", 2))} >Typography</div>
        </div>
    )
}

ReactDOM.render(<Documentation />, document.getElementById("root"));