import React, { Component } from "react";

export default class JSXCollection extends Component {
  render() {
    let list = this.props.frams.map((f, index) => (
      <li key={index}>
        <a href={f.url}> {f.name} </a>
      </li>
    ));
    return (
      <div>
        <h1>{this.props.type}</h1>
        <ul>{list}</ul>
      </div>
    );
  }
}
