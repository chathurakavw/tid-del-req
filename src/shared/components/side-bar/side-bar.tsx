import React, { FC } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ISideBarProps } from 'shared/components/side-bar/side-bar-type';
import { AiFillFileAdd, AiFillHome } from 'react-icons/ai';
import { MdFileOpen, MdMarkEmailUnread, MdQueue } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { pageRoutes } from 'app/constants/page-routes';
import { logo } from 'assets/index';

const SideBar: FC<ISideBarProps> = () => {
    const navigate = useNavigate();

    useGSAP(() => {
        gsap.to('#side-bar-wrapper', { opacity: 1, delay: 2 });
        gsap.to('.sidebar-icon', { opacity: 1, delay: 3 });
        gsap.to('.logo-wrapper', { opacity: 1, delay: 3 });
    }, []);

    return (
        <div className="side-bar">
            <div className="logo-wrapper">
                <img src={logo} alt="Bank Logo" className="logo" />
            </div>
            {/*{
                sidebar.map((item) => (
                    <div className="sidebar-icon" onClick={() => navigate(item.path)}>
                        {item.icon}
                    </div>
                ))
            }*/}

            <div id="side-bar-wrapper">
                <AiFillHome className="sidebar-icon" onClick={() => navigate(pageRoutes.HOME)} />
                <AiFillFileAdd className="sidebar-icon" onClick={() => navigate(pageRoutes.CREATE)} />
                <MdMarkEmailUnread className="sidebar-icon" onClick={() => navigate(pageRoutes.INBOX)} />
                <MdQueue className="sidebar-icon" onClick={() => navigate(pageRoutes.QUEUE)} />
                <MdFileOpen className="sidebar-icon" onClick={() => navigate(pageRoutes.ACTIONED)} />
                <FaSearch className="sidebar-icon" onClick={() => navigate(pageRoutes.SEARCH)} />
            </div>
        </div>
    );
};

export default SideBar;
