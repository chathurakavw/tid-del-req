import React, { FC } from 'react';
import Input from 'rc-input';
import { IInputProps } from 'shared/components/input/input-type';

const RCInput: FC<IInputProps> = ({ ...inputProps }) => <Input className="tid-text-box" {...inputProps} />;

export default RCInput;
