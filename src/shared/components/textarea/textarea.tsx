import React, { FC } from 'react';
import { ITextareaProps } from 'shared/components/textarea/textarea-type';

const RCTextarea: FC<ITextareaProps> = ({ ...inputProps }) => <textarea className="tid-textarea" {...inputProps} />;

export default RCTextarea;
