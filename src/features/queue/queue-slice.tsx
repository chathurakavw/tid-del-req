import { FC } from 'react';
import { IQueueSliceProps } from 'features/queue/config/queue-type';

/**
 *
 */
const QueueSlice: FC<IQueueSliceProps> = () => {
    return (
        <div className="queue-slice-wrapper">
            <div className="section">QueueSlice</div>
        </div>
    );
};

export default QueueSlice;
