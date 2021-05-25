import * as React from "react";
import * as ReactDOM from "react-dom";
import {App} from "./Components/App";

window.addEventListener("load", (): void => {
    ReactDOM.render(<App/>, window.document.getElementById("app"));
});
