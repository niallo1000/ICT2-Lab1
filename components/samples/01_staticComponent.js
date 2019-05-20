import React, { Component } from "react";

export default class StaticComponent extends Component {
  render() {
    return (
      <div className="myCSSstyle">
        <h1>Dynamic Languages</h1>
        <ul>
          <li>Python</li>
          <li>Javascript</li>
          <li>Ruby</li>
          <li>PHP</li>
        </ul>
      </div>
    );
  }
}
