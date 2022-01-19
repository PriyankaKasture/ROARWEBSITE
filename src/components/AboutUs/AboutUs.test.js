import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "REDUX/store";

import AboutUs from "COMPONENTS/AboutUs/AboutUs";

describe('(component) AboutUs', () => {

  beforeEach(() => {

  })
  afterEach(() => {

  })

  it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <AboutUs />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})
