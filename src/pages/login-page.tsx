import { FC } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import axiosInstance from 'app/axios/axios-instance';
import {Option} from 'rc-select';
import { Datepicker, Icon, Input, Select, Switch, Textarea } from 'shared/components';

/**
 *
 */
const LoginPage: FC<ILoginPageProps> = () => {
    const { showBoundary } = useErrorBoundary();

    /**
     * @author Eshan Priyadarshana <esahnwp@gmail.com>
     * @description
     */
    const api = async () => {
        await axiosInstance.get('https://dummy.restapiexample.com/api/v1/employee');
        // throw new Error('Error');
    };

    return (
        <div>
            LoginPage
            <button
                onClick={async () => {
                    try {
                        await api();
                    } catch (error) {
                        showBoundary(error);
                    }
                }}
            >
                Login
            </button>
            ICON
            <Icon
                colorVariant="icon-black"
                iconName="outline-arrow-right"
                sizeVariant="icon-sm"
            />
            <Input placeholder="id" />
            <br />
            <br />
            <Select>
                <Option value="jack">jack</Option>
            </Select>
            <br />
            <br />
            <Textarea placeholder="write something...!" />
            <br />
            <br />
            <Switch />
            <br />
            <br />
            <Datepicker />
        </div>
    );
};

export default LoginPage;
