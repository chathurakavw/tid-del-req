import React, { FC, useState } from 'react';
import RCInput from 'rc-input';
import { IInputProps } from 'shared/components/input/input-type';
import { Icon } from 'shared/components';

const Input: FC<IInputProps> = ({ ...inputProps }) => {
    const [showClearIcon, setShowClearIcon] = useState<boolean>(false);

    return (
        <RCInput
            {...inputProps}
            className="tid-text-box"
            allowClear={{
                clearIcon: showClearIcon ? <Icon
                    iconName="outline-circle-close"
                    sizeVariant="icon-lg"
                    colorVariant="icon-black"
                /> : <></>,
            }}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                if (inputProps.onChange) {
                    inputProps.onChange(event);
                }
                setShowClearIcon(event.target.value.length > 0);
            }}
        />
    )
}

export default Input;
