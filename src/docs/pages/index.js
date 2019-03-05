import React from "react";
import Logo from "./logo";
import About from "./about";
import { Context } from "..";


const pages = [<Logo />, <About />];
export default function () {
    return <Context.Consumer>
        {({ activePage }) => (
            pages[activePage]
        )}
    </Context.Consumer>
}