import { RouteObject } from 'react-router-dom';
import { pageRoutes } from 'app/constants/page-routes';
import DashboardLayout from 'app/routes/layouts/dashboard-layout';
import { Actioned, Create, Home, Inbox, Queue, Search } from 'pages';

export const protectedRoutes: RouteObject = {
    path: pageRoutes.DASHBOARD,
    element: <DashboardLayout />,
    children: [
        {
            path: pageRoutes.HOME,
            element: <Home />,
        },
        {
            path: pageRoutes.CREATE,
            element: <Create />,
        },
        {
            path: pageRoutes.INBOX,
            element: <Inbox />,
        },
        {
            path: pageRoutes.QUEUE,
            element: <Queue />,
        },
        {
            path: pageRoutes.ACTIONED,
            element: <Actioned />,
        },
        {
            path: pageRoutes.SEARCH,
            element: <Search />,
        },
    ],
};
