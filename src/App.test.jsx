import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("When App component is rendered and basic calcultions are done", () => {
  const app = shallow(<App />);

  it("then App is not crashing", () => {
    expect(app.length).toEqual(1);
  });

  const container = app.find("Container");

  it("then everything is wrapped in a Container", () => {
    expect(container.length).toEqual(1);
  });

  it("then there are four rows", () => {
    expect(container.children().find("ForwardRef")).toEqual(4);
  });

  console.log(app.debug());
});
