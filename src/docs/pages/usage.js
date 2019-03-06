import React from "react";
import { animateClass, animateText, samples } from "../../lib";
import { css } from "emotion";


const style = css({
    width: "100%",
    "&>p": {
        background: mainColor,
        padding: "5px 10px",
        color: secondaryColor,
        overflow: "hidden",
        "&:last-of-type": {
            background: secondaryColor,
            color: mainColor,
            fontSize: 40,
            textAlign: "center",
        }
    }
});
export default function ({ className }) {
    return (
        <div className={`${className} ${style}`}>
            <p>npm i react-punch{animateText("_", samples.emphasis.flash("ease", 1000, "infinite"))}</p>
            <p>{`import { animateText, samples } from "react-punch";`}</p>
            <p>{`<div>Hello {animateText("world", samples.text.gradient())}</div>`}</p>
            <p>Hello {animateText("world", samples.text.gradient())}</p>
        </div >
    )
}