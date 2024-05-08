import { FC } from 'react';
import { IHomeSliceProps } from 'features/home/config/home-type';

/**
 *
 */
const HomeSlice: FC<IHomeSliceProps> = () => {
    return (
        <div className="home-slice-wrapper">
            <div className="section">
                HomeSlice
                <br />
                <br />
            </div>
        </div>
    );
};

export default HomeSlice;
