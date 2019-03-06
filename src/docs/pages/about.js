import React from "react";
import { animateClass, animateText, samples } from "../../lib";



export default function ({ className }) {
    return (
        <div className={className}>
            React {animateText("Punch", samples.emphasis.jello("ease", 400, "infinite"), 100)} is a typography library
        </div >
    )
}