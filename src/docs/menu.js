import React, { useState, useCallback } from "react";
import { animateClass, animateText, samples, animateElement } from "../lib";
import { css } from "emotion";
import { Context } from ".";

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
        left: -170,
        width: 170,
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


export default function () {
    return (
        <Context.Consumer>
            {({ openMenu, shakeTrigger, setActivePage }) => (
                <div className={style}>
                    <button
                        id="menu-trigger"
                        onClick={openMenu}
                        onMouseEnter={shakeTrigger}>
                        {animateText("|||", samples.entrance.flip())}
                    </button>
                    <ul
                        id="menu"
                    >
                        <li role="button" onClick={() => setActivePage(1)}>About</li>
                        <li role="button" onClick={() => setActivePage(2)}>Usage</li>
                        <li role="button" onClick={() => setActivePage(3)}>Examples</li>
                        <li role="button" onClick={() => setActivePage(4)}>API</li>
                    </ul>
                </div >
            )}
        </Context.Consumer>
    )
}