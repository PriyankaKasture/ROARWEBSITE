import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "REDUX/store";

import Home from "COMPONENTS/Home/Home";

describe('(component) Home', () => {

  beforeEach(() => {

  })
  afterEach(() => {

  })

  it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <Home />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})
