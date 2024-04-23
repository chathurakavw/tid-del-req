import { Meta, StoryObj } from '@storybook/react';
import Select from './select';
import { Option } from 'rc-select';

const meta = {
    title: 'Components/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {
        children: {
            control: false
        },
        showSearch: {
            control: 'boolean',
            description: "whether show search input in single mode",
            table: {
                defaultValue: {
                    summary: 'true',
                },
                type: {
                    summary: 'boolean'
                }
            }
        }
    }
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: <>
            <Option value="1">Option 1</Option>
            <Option value="2">Option 2</Option>
        </>
    },
};
