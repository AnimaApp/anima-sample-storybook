import React from "react";
import A from "./Complex";

export default {
  title: "Custom components/Complex",
  component: A,
  argTypes: {
    // checked: { control: "boolean" },
  },
};

const Template = (args) => <A {...args} />;
export const Complex = Template.bind({});

Complex.args = {
  // checked: true,
};
