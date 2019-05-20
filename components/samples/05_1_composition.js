import React, { Component, Fragment } from "react";

import Child1 from "./05_2_child1";
import Child2 from "./05_3_child2";

export default class ParentComposition extends Component {
  render() {
    return (
      <Fragment>
        <h1>I'm parent component</h1>
        <Child1 />
        <Child2 />
      </Fragment>
    );
  }
}
