import { FC } from 'react';
import { IHeaderProps } from 'features/home/config/home-type';

/**
 *
 */
const Header: FC<IHeaderProps> = () => {
    return (
        <div className="header-wrapper">
            <div className="header-desc">
                <div className="tab-name">Home</div>
                <div className="user-details">Vinod Chathuraka [12663] - MATARA</div>
            </div>
        </div>
    );
};

export default Header;
