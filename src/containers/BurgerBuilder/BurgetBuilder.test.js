import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BurgerBuilder } from "./BurgerBuilder";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}} />);
});

describe("<BurgerBuilder", () => {
  it("should render <BurgerContros /> when reciving ingredients", () => {
    wrapper.setProps({ ings: { salad: 0 } });
    expect(wrapper.find(BuildControls)).toHaveLength(1);
  });
});
