import { ReactNode } from 'react';
import { SelectProps } from 'rc-select';

export interface IDropdownProps extends SelectProps {
    /**
     * The content of the select
     */
    children: ReactNode;
}
