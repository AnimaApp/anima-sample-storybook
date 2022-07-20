import React from "react";
import { Radio } from "@nextui-org/react";

export default {
  title: "Next UI/Radio",
  component: Radio,
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    size: {
      control: {
        type: "select",
        options: ["xs", "md"],
      },
    },
    color: {
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
    },
  },
};

const Template = (args) => <Radio {...args} />;
export const NextUiRadio = Template.bind({});

NextUiRadio.args = {
  checked: true,
  disabled: false,
  color: "primary",
  size: "md",
};
