import React, { useState, useCallback } from "react";
import { animateClass, animateText, samples, animateElement } from "../lib";
import { css } from "emotion";

const style = css({
    position: "absolute", zIndex: 10, top: 0, left: 0, height: "100%",
    "&>button": {
        padding: 0, margin: 0, width: "100%", border: "none",
        background: "transparent", outline: "none", color: secondaryColor,
        fontWeight: 800, fontSize: 40, cursor: "pointer",
    },
    "&>ul": {
        listStyle: "none",
        fontSize: 30,
        color: secondaryColor,
        background: "black",
        position: "relative",
        height: "100%",
        userSelect: "none",
        left: -140,
        width: 140,
        top: -56,
        padding: 25,
        margin: 0,
        "&>li": {
            cursor: "pointer",
            "&:hover": {
                color: alternativeColor,
            }
        }
    }
})


let trigger, menu;
export default function () {
    const openMenu = function () {
        animateElement(trigger, {
            frames: { from: { transform: "scale(1,1)", opacity: 1 }, to: { transform: "scale(0,0)", opacity: 0 } }
        });
        animateElement(menu, {
            frames: { from: { transformOrigin: "top left", transform: "skewX(0deg)", left: -140 }, to: { transformOrigin: "top left", transform: "skewX(-5deg)", left: 0 } },
            duration: 500
        });
    }
    return (
        <div className={style}>
            <button
                ref={e => trigger = e}
                onClick={openMenu}
                onMouseEnter={() => animateElement(trigger, samples.emphasis.jello())}>
                {animateText("|||", samples.entrance.flip())}
            </button>
            <ul
                ref={e => menu = e}
            >
                <li role="button">About</li>
                <li role="button">API</li>
            </ul>
        </div >
    )
}