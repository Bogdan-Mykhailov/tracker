import './index.css'
import React from "react";
import {render} from "react-dom";
import {App} from "./01-components/App.jsx";
import {Provider} from "react-redux";
import store from './02-bll/store'


render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
)
