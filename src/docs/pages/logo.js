import React from "react";
import { animateClass, animateText, samples } from "../../lib";

export default function () {
    const duration = 800;
    const delay = 500;
    return (
        <div style={{ position: "relative", transform: "skewX(-15deg) rotate(-9deg)" }}>
            <h1
                className={animateClass(
                    {
                        frames: {
                            from: { width: 10 },
                            to: { width: "60vw" },
                        },
                        easing: "cubic-bezier(1,.35,0,1.15)",
                        mode: "both",
                        duration,
                    }, delay
                )}
                style={{
                    whiteSpace: "nowrap",
                    padding: "1vh",
                    textAlign: "center",
                    background: mainColor,
                    overflow: "hidden",
                    zIndex: 2
                }}>
                {animateText("PUNCH", samples.entrance.slide("top", 150, "cubic-bezier(1,-0.52,0,1.15)", 1000), 100, "span", delay / 2, { fontFamily: "Titillium Web", color: secondaryColor, fontSize: "10vw" })}<br />
            </h1 >
            {animateText("Alpha", samples.entrance.zoom("center", 50, "cubic-bezier(1,-0.52,0,1.15)"), 0, "span", delay + 800, { fontFamily: "Titillium Web", color: secondaryColor, background: alternativeColor, fontSize: "2vw", position: "absolute", top: "78%", right: 10, padding: "0px 5px", zIndex: 1 })} <br />
        </div >
    )
}