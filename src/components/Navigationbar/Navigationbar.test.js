import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "REDUX/store";

import Navbar from "COMPONENTS/Navbar/Navbar";

describe('(component) Navbar', () => {

  beforeEach(() => {

  })
  afterEach(() => {

  })

  it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <Navbar />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})
