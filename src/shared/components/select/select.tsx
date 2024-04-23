import { FC, useState } from 'react';
import RcSelect from 'rc-select';
import { IDropdownProps } from 'shared/components/select/select-type.ts';
import 'rc-select/assets/index.css';
import { Icon } from 'shared/components';

const Select: FC<IDropdownProps> = ({ children }) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <RcSelect
            className="rc-selector"
            allowClear={{
                clearIcon: <Icon
                    colorVariant="icon-black"
                    iconName="outline-circle-close"
                    sizeVariant="icon-lg"
                />,
            }}
            suffixIcon={
                <Icon
                    iconName={isActive ? 'outline-chevron-up' : 'outline-chevron-down'}
                    sizeVariant="icon-lg"
                    colorVariant="icon-black"
                />
            }
            onDropdownVisibleChange={(open: boolean) => {
                setIsActive(open);
            }}
        >
            {children}
        </RcSelect>
    );
};

export default Select;
