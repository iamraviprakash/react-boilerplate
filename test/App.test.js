import App from "../src/components/App";
import React from "react";
import { shallow } from "enzyme";
import { TestScheduler } from "jest";

describe("App", () => {
  test("should match snapshot", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find("h1").text()).toBe("Welcome to react boilerplate");
    expect(wrapper).toMatchSnapshot;
  });
});
