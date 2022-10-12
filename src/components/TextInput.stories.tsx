import { Meta, StoryObj } from "@storybook/react";
import { EnvelopeSimple } from "phosphor-react";
import { TextInput, TextInputInputProps } from "./TextInput";

export default {
  title: "components/TextInput",
  component: TextInput.Root,
  args: {
    children: <TextInput.Input placeholder="Type something" />,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputInputProps>;

export const Default: StoryObj<TextInputInputProps> = {};

export const WithIcon: StoryObj<TextInputInputProps> = {
  args: {
    children: [
      <TextInput.Icon>
        <EnvelopeSimple />
      </TextInput.Icon>,
      <TextInput.Input type="email" placeholder="Type your email" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
