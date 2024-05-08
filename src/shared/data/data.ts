//--- sidebar
import { AiFillFileAdd, AiFillHome } from 'react-icons/ai';
import { pageRoutes } from 'app/constants/page-routes';
import { MdFileOpen, MdMarkEmailUnread, MdQueue } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';

export const sidebar = [
    {
        key: 1,
        icon: AiFillHome,
        path: pageRoutes.HOME,
    },
    {
        key: 1,
        icon: AiFillFileAdd,
        path: pageRoutes.CREATE,
    },
    {
        key: 1,
        icon: MdMarkEmailUnread,
        path: pageRoutes.INBOX,
    },
    {
        key: 1,
        icon: MdQueue,
        path: pageRoutes.QUEUE,
    },
    {
        key: 1,
        icon: MdFileOpen,
        path: pageRoutes.ACTIONED,
    },
    {
        key: 1,
        icon: FaSearch,
        path: pageRoutes.SEARCH,
    },
];
