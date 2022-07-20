import React from "react";
import Checkbox from "@mui/material/Checkbox";

export default {
  title: "Material UI/Checkbox",
  component: Checkbox,
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

const Template = (args) => <Checkbox {...args} />;
export const MuiCheckbox = Template.bind({});

MuiCheckbox.args = {
  checked: true,
  disabled: false,
};
