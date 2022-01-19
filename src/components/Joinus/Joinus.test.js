import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "REDUX/store";

import Joinus from "COMPONENTS/Joinus/Joinus";

describe('(component) Joinus', () => {

  beforeEach(() => {

  })
  afterEach(() => {

  })

  it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <Joinus />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})
