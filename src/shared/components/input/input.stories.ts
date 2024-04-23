import { Meta, StoryObj } from '@storybook/react';
import Input from './input';

const meta = {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        addonAfter: {
            control: 'text',
            description: "The label text displayed after (on the right side of) the input field",
            table: {
                // defaultValue: {
                //     summary: '-',
                // },
                type: {
                    summary: 'ReactNode'
                }
            }
        }
    }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
