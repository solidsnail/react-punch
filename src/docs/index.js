import React, { useEffect, useState, useContext } from "react";
import ReactDOM from "react-dom";
import "./global";
import Pages from "./pages";
import Menu from "./menu";
import { animateElement, samples } from "../lib";


let globalState;
export const Context = React.createContext();
function Documentation() {
    const [state, setState] = useState({});
    useEffect(() => {
        setState({
            activePage: 0,
            openMenu: function () {
                animateElement(document.getElementById("menu-trigger"), {
                    frames: { from: { transform: "scale(1,1)", opacity: 1 }, to: { transform: "scale(0,0)", opacity: 0 } }
                });
                animateElement(document.getElementById("menu"), {
                    frames: { from: { transformOrigin: "top left", transform: "skewX(0deg)", left: -140 }, to: { transformOrigin: "top left", transform: "skewX(-5deg)", left: 0 } },
                    duration: 500
                });
            },
            shakeTrigger: function () {
                animateElement(document.getElementById("menu-trigger"), samples.emphasis.jello())
            },
            setActivePage: function (activePage) {
                globalState.activePage !== activePage && setState({ ...globalState, activePage });
            },
        });
    }, []);
    useEffect(() => {
        globalState = state;
    }, [state]);
    return (
        <Context.Provider value={state}>
            <Menu />
            <Pages />
        </Context.Provider>
    )
}

ReactDOM.render(<Documentation />, document.getElementById("root"));