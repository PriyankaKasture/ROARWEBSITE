import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "REDUX/store";

import Projects from "COMPONENTS/Projects/Projects";

describe('(component) Projects', () => {

  beforeEach(() => {

  })
  afterEach(() => {

  })

  it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <Projects />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})
