import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "REDUX/store";

import ContactUs from "COMPONENTS/ContactUs/ContactUs";

describe('(component) ContactUs', () => {

  beforeEach(() => {

  })
  afterEach(() => {

  })

  it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <ContactUs />
      </Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  })
})
