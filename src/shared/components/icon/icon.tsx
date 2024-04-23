import React from 'react';
import classnames from 'classnames';
import { IconProps } from './icon-type';

/**
 * @author Vinod Chathuraka <vinod.chathuraka@gmail.com>
 *
 * This component is the icon component.
 * This component is used to use the icon by inserting the iconName. It also can include variant as another props.
 * className in the component define the size (mb-sm, mb-lg, mb-xl), and the color of the component (mb-black, mb-white).
 */
const Icon: React.FC<IconProps> = ({ iconName, colorVariant, sizeVariant, mobileIcon }) => {
    return (
        <i
            className={classnames('icon', `${sizeVariant}`, `${colorVariant}`, iconName, {
                ['mobileIcon']: mobileIcon,
            })}
            data-testid="icon"
        />
    );
};

export default Icon;
