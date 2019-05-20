import React, { Component } from "react";

export default class ComponentProps extends Component {
  render() {
    return (
      <div className="myCSSstyle">
        <h1>{`${this.props.heading} Languages`}</h1>
        <ul>
          <li>{this.props.languages[0]}</li>
          <li>{this.props.languages[1]} </li>
          <li>{this.props.languages[2]} </li>
        </ul>
      </div>
    );
  }
}
