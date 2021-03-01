import { Meta, Story } from '@storybook/react/types-6-0';
import { GridContent, GridContentProps } from '.';

import mock from './mock';

export default {
  title: 'GridContent',
  component: GridContent,
  args: mock,
} as Meta;

export const Template: Story<GridContentProps> = (args) => {
  return (
    <div>
      <GridContent {...args} />
    </div>
  );
};
