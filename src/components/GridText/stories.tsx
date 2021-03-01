import { Meta, Story } from '@storybook/react/types-6-0';
import { GridText, GridTextProps } from '.';

import mock from './mock';

export default {
  title: 'GridText',
  component: GridText,
  args: mock,
} as Meta;

export const Template: Story<GridTextProps> = (args) => {
  return (
    <div>
      <GridText {...args} />
    </div>
  );
};
