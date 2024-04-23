import React, { FC } from 'react';
import Select, { Option } from 'rc-select';
import { IDropdownProps } from 'shared/components/dropdown/dropdown-type';
import 'rc-select/assets/index.css';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { findAllByDisplayValue } from '@storybook/test';

const RCDropdown: FC<IDropdownProps> = () => (
    <Select
        multiple={true}
        className="rc-selector"
        autoFocus
        id="my-select"
        placeholder="placeholder"
        allowClear={{
            clearIcon: <div>close</div>,
        }}
        suffixIcon={<IoIosArrowDropdownCircle style={{ background: 'red', display: 'grid', placeContent: 'center' }} />}
        dropdownStyle={{
            background: 'red',
            border: 'none',
        }}
        dropdownMenuStyle={{
            background: 'bgCyan',
        }}
    >
        <Option className="rc-menu" value="home">
            home
        </Option>
        <Option value="about">about</Option>
        <Option value="contact">contact</Option>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <option value={i} key={i}>
                {i}
            </option>
        ))}
    </Select>
);

export default RCDropdown;
