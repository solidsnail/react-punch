import { injectGlobal } from "emotion";

window.mainColor = "black";
window.secondaryColor = "white";
window.alternativeColor = "#e91e63";

injectGlobal(`
            body{
                margin: 0px;
                width: 100vw;
                height: 100vh;
                font-family: Lato;
                text-rendering: optimizeLegibility;
                -webkit-font-smoothing: subpixel-antialiased;
            }
            #root{
                width: 100%;
                height: 100%;
                background: ${alternativeColor};
                overflow: hidden;
                display: flex;
                flex-flow: row;
                justify-content: center;
                align-items: center;
                padding-left: 100px;
            }
            h1,h2,h3,h4,h5,h6{
                margin: 0px;
                padding: 0px;
                display: inline-block;
                font-weight: 700;
            }
            *{
                box-sizing: border-box;
            }
        `);