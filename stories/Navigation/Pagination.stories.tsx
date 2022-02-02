import { Story, Meta } from '@storybook/react/types-6-0';
import { modifyExcludedParams } from '../../.storybook/excludedParams';
import Pagination, { PaginationProps } from '../../src/components/Pagination';

export default {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
  parameters: {
    controls: { exclude: modifyExcludedParams(['color']) },
  },
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
    },
  },
} as Meta;

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  count: 10,
};

export const MediumPrimary = Template.bind({});
MediumPrimary.args = {
  count: 10,
  color: 'primary',
};

export const SmallPrimary = Template.bind({});
SmallPrimary.args = {
  count: 10,
  color: 'primary',
  size: 'small',
};
