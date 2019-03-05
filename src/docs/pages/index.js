import React from "react";
import Logo from "./logo";
import About from "./about";
import Usage from "./usage";
import Examples from "./examples";
import API from "./api";
import { Context } from "..";
import { AnimationGroup } from "../../lib";


export default function () {
    return <Context.Consumer>
        {({ activePage }) => (
            <React.Fragment>
                <AnimationGroup show={activePage === 0}><Logo /></AnimationGroup>
                <AnimationGroup show={activePage === 1}><About /></AnimationGroup>
                <AnimationGroup show={activePage === 2}><Usage /></AnimationGroup>
                <AnimationGroup show={activePage === 3}><Examples /></AnimationGroup>
                <AnimationGroup show={activePage === 4}><API /></AnimationGroup>
            </React.Fragment>
        )}
    </Context.Consumer>
}