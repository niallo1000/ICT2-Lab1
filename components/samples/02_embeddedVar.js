import React, { Component } from "react";
export default class JSXEmbeddedVars extends Component {
  render() {
    let languages = ["Go", "Julia", "Swift"];
    let header = "Modern";
    return (
      <div className="myCSSstyle">
        <h1>{`${header} Languages`}</h1>
        <ul>
          <li>{languages[0]}</li>
          <li>{languages[1]} </li>
          <li>{languages[2]} </li>
        </ul>
      </div>
    );
  }
}
