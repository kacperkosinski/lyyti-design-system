import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Switch, { SwitchProps } from '../components/Switch';
import ThemeSelector from "../themes/ThemeSelector";

export default {
  title: 'Components/Switch',
  component: Switch,
} as Meta;

const Template: Story<SwitchProps> = (args) => <ThemeSelector><Switch {...args} /></ThemeSelector>;

export const Medium = Template.bind({});
Medium.args = {
  checked: true,
  disabled: false,
  size: 'medium'
};

export const Small = Template.bind({});
Small.args = {
  checked: true,
  disabled: false,
  size: 'small'
};