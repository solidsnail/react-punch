import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { animate } from "../lib";


let element;
function Documentation() {
    const ref = useRef(null);
    useEffect(() => {
        element = ref.current;
    }, []);
    return (
        <div>
            <button ref={ref} onMouseOver={() => animate(element)}>Button to animate</button>
        </div>
    )
}

ReactDOM.render(<Documentation />, document.getElementById("root"));