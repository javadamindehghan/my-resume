import { createStore , applyMiddleware ,compose } from "redux";
import thunk from "redux-thunk";
import { currentreducer } from "../reducer/current";

export const store=createStore(currentreducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)