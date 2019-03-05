import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./global";
import Logo from "./logo";
import Menu from "./menu";




function Documentation() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(true);
    }, []);
    return (
        loaded && <React.Fragment>
            <Menu />
            <Logo />
        </React.Fragment>
    )
}

ReactDOM.render(<Documentation />, document.getElementById("root"));