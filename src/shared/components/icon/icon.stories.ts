import { Meta, StoryObj } from '@storybook/react';
import Icon from './icon';

const meta = {
    title: 'Components/Icon',
    component: Icon,
    tags: ['autodocs'],
    argTypes: {
        iconName: { control: 'select' },
        sizeVariant: { control: 'select' },
        colorVariant: { control: 'select' },
        mobileIcon: { control: 'boolean' },
    },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        iconName: 'outline-circle-close',
        sizeVariant: 'icon-sm',
        colorVariant: 'icon-black',
        mobileIcon: false,
    },
};
