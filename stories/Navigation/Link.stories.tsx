import { StoryFn, Meta } from '@storybook/react';
import Link, { LinkProps } from '../../src/components/Link';
import { SettingsRounded } from '../../src/icons';

export default {
  title: 'Components/Navigation/Link',
  component: Link,
} as Meta;

const Template: StoryFn<LinkProps> = (args) => <Link {...args} />;

export const ListLink = Template.bind({});
ListLink.args = {
  href: '#',
  children: 'Link example',
  underline: 'hover',
};

export const InlineLink = Template.bind({});
InlineLink.args = {
  href: '#',
  children: 'Link example',
  underline: 'always',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  href: '#',
  children: [
    <SettingsRounded key={1} fontSize="inherit" style={{ marginRight: '8px' }} />,
    'Link example',
  ],
  underline: 'always',
};
