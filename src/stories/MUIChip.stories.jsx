import React from "react";
import { default as Component } from "@mui/material/Chip";

export default {
  title: "Material UI/Chip",
  component: Component,
  argTypes: {
    variant: {
      control: { type: "select", options: ["filled", "outlined"] },
    },
    color: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "success",
          "error",
          "info",
          "warning",
        ],
      },
    },
    size: {
      control: { type: "select", options: ["small", "medium"] },
    },
    disabled: { control: "boolean" },
    clickable: { control: "boolean" },
    onDelete: { control: "boolean", name: "deletable" },
  },
};

const Template = (args) => <Component {...args} />;
export const Chip = Template.bind({});

Chip.args = {
  label: "Chip text",
  variant: "filled",
  color: "primary",
  clickable: true,
  disabled: false,
  onDelete: false,
};