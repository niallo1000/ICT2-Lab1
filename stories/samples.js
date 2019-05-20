import React from "react";
import { storiesOf } from "@storybook/react";

import StaticComponent from "../components/samples/01_staticComponent";
import JSXEnbeddedVars from "../components/samples/02_embeddedVar";
import LanguagesWithProps from "../components/samples/03_props";
import JSXCollection from "../components/samples/04_iteration";
import ParentComposition from "../components/samples/05_1_composition";

const list = ["Javascript", "Java", "Python"];

storiesOf("Samples", module)
  .add("01 - static component", () => {
    return <StaticComponent />;
  })
  .add("02 - JSX embedded variables", () => { return <JSXEnbeddedVars />})
  .add("03 - component with props", () => {
    const title = "Ranked";
    return <LanguagesWithProps languages={list} heading={title} />;
  })
  .add("04 - Component collection (Iteration)", () => {
    const frameworks = [
      { name: "React", url: "https://facebook.github.io/react/" },
      { name: "Vue", url: "https://vuejs.org/" },
      { name: "Angular", url: "https://angularjs.org/" }
    ];
    const type = "JS client-side Web";
    return <JSXCollection frams={frameworks} type={type} />;
  })
  .add("05 - component composition", () => <ParentComposition />)
