import { Meta, Story } from '@storybook/react/types-6-0';
import { GoTop } from '.';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
        doloremque qui eum maxime magni omnis sit, aliquam soluta distinctio nam
        dignissimos praesentium ut sunt porro incidunt molestias libero ab
        consectetur.
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
        doloremque qui eum maxime magni omnis sit, aliquam soluta distinctio nam
        dignissimos praesentium ut sunt porro incidunt molestias libero ab
        consectetur.
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
        doloremque qui eum maxime magni omnis sit, aliquam soluta distinctio nam
        dignissimos praesentium ut sunt porro incidunt molestias libero ab
        consectetur.
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
        doloremque qui eum maxime magni omnis sit, aliquam soluta distinctio nam
        dignissimos praesentium ut sunt porro incidunt molestias libero ab
        consectetur.
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
        doloremque qui eum maxime magni omnis sit, aliquam soluta distinctio nam
        dignissimos praesentium ut sunt porro incidunt molestias libero ab
        consectetur.
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
        doloremque qui eum maxime magni omnis sit, aliquam soluta distinctio nam
        dignissimos praesentium ut sunt porro incidunt molestias libero ab
        consectetur.
      </p>
      <h1>Lorem ipsum dolor sit, amet</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
        doloremque qui eum maxime magni omnis sit, aliquam soluta distinctio nam
        dignissimos praesentium ut sunt porro incidunt molestias libero ab
        consectetur.
      </p>
      <GoTop {...args} />
    </div>
  );
};
