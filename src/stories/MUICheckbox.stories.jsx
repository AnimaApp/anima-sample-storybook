import React from "react";
import Checkbox from "@mui/material/Checkbox";

export default {
  title: "Material UI/Checkbox",
  component: Checkbox,
  argTypes: {
    checked: { control: "boolean" },
  },
};

const Template = (args) => <Checkbox {...args} />;
export const MUICheckbox = Template.bind({});

MUICheckbox.args = {
  checked: true,
};
