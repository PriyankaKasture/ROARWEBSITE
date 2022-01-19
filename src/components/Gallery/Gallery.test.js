import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "REDUX/store";

import Gallery from "COMPONENTS/Gallery/Gallery";

describe('(component) Gallery', () => {

  beforeEach(() => {

  })
  afterEach(() => {

  })

  it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <Gallery />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})
