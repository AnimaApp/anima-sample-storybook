import React from "react";
import { Badge } from "@mantine/core";

export default {
  title: "Mantine/Badge",
  component: Badge,
  argTypes: {
    variant: {
      description: "Variant",
      control: { type: "select" },
      options: ["outline", "light", "filled"],
    },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    radius: {
      description: "Radius",
      control: { type: "select" },
      options: ["md", "lg", "xl"],
    },
    label: { description: "Label", type: "string" },
    color: {
      description: "Color",
      control: { type: "select" },
      options: ["gray", "red", "indigo", "blue", "green", "orange"],
    },
  },
};

const Template = (args) => <Badge {...args}>{args.label}</Badge>;

export const MantineBadge = Template.bind({});
MantineBadge.args = {
  label: "Badge",
  variant: "light",
  size: "md",
  radius: "lg",
  color: "blue",
};
