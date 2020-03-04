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

  const rows = container.children().find("ForwardRef");

  it("then there are 5 rows", () => {
    expect(rows.length).toEqual(5);
  });

  const col = rows.at(0).find("_default");

  it("first row has 1 column", () => {
    expect(col.length).toEqual(1);
  });

  /*  it("initial calculator value is 0", () => {
    expect(col.text()).toEqual(0);
  }); */

  console.log(col.debug());
  console.log(col.text());
  // console.log(col.value());
});
