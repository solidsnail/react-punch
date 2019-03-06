import React from "react";
import { animateClass, animateText, samples } from "../../lib";
import { css } from "emotion";


const style = css({
    width: "100%",
    "&>p": {
        background: secondaryColor,
        padding: "5px 10px",
    }
});
export default function ({ className }) {
    return (
        <div className={`${className} ${style}`}>
            <p>React {animateText("Punch", samples.emphasis.jello("ease", 1000, "infinite"), 0, "span", 0, { background: mainColor, color: alternativeColor, padding: "0px 5px" })} is a {animateText("kinetic", samples.emphasis.pulse(.1, "ease", 500, "infinite"), 100)} typography and {animateText("motion", samples.emphasis.shake(0.5, "ease-in-out", 1000, "infinite"), 100)} library for Reactjs</p>
            <p>It provides a list of samples and a simplified syntax that allows you to build {animateText("impressive", samples.entrance.flip("vertical", "ease", 2000, "infinite"), 250)} animations with  {animateText("ease", samples.emphasis.rubber(0.1, "ease-out", 1000, "infinite"), 0)}</p>
        </div >
    )
}