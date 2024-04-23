import React, { FC } from 'react';
import { ISwitchProps } from 'shared/components/switch/switch-type';

const RCSwitch: FC<ISwitchProps> = () => (
    <label className="toggle" htmlFor="myToggle">
        <input className="toggle-input" name="" type="checkbox" id="myToggle" />
        <div className="toggle-fill"></div>
    </label>
);

export default RCSwitch;
