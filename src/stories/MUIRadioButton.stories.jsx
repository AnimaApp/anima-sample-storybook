import React from "react";
import A from "@mui/material/Radio";

export default {
  title: "Material UI/Radio",
  component: A,
  argTypes: {
    checked: { control: "boolean" },
  },
};

const Template = (args) => <A {...args} />;
export const Radio = Template.bind({});

Radio.args = {
  checked: true,
};
