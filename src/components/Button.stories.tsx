import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "components/Button",
  component: Button,
  args: {
    children: "Confirm",
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};
