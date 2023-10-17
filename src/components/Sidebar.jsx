import { MdOutlineLiveHelp }
    from 'react-icons/md';
// import { NavLink } from 'react-router-dom';
import { PiNut, PiWalletBold } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { TbSquareKey, TbCube, TbUserSquareRounded, TbDiscount2 } from "react-icons/tb";
import './Sidebar.css';
import profile from '../assets/profile.jpg';



function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <PiNut className='icon_header' size='30px' />
                <div className='sidebar-brand'>
                    Dashboard
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}><RxCross2  size="25px"/></span>
            </div>

            <ul className='sidebar-list'>       
                    <li className='sidebar-list-item'>
                        <TbSquareKey size='45px' />
                        <p>Dashboard</p>
                        <div className='side-arrow'>
                            <IoIosArrowForward />
                        </div>
                    </li>
                <li className='sidebar-list-item'>
                    <TbCube size='45px' />
                    <p>Products</p>
                    <div className='side-arrow'>
                        <IoIosArrowForward />
                    </div>
                </li>
                <li className='sidebar-list-item'>
                    <TbUserSquareRounded size='45px' />
                    <p>Customers</p>
                    <div className='side-arrow'>
                        <IoIosArrowForward />
                    </div>
                </li>
                <li className='sidebar-list-item'>
                    <PiWalletBold size='40px' />
                    <p>Income</p>
                    <div className='side-arrow'>
                        <IoIosArrowForward />
                    </div>
                </li>
                <li className='sidebar-list-item'>
                    <TbDiscount2 size='45px' />
                    <p>Promote</p>
                    <div className='side-arrow'>
                        <IoIosArrowForward />
                    </div>
                </li>
                <li className='sidebar-list-item'>
                    <MdOutlineLiveHelp size='35px' />
                    <p>Help</p>
                    <div className='side-arrow'>
                        <IoIosArrowForward />
                    </div>
                </li>
            </ul>

            <div className='logged-container'>
                <div className="logged-box">
                    <img className="avatar" src={profile} alt="Rounded avatar" />
                    <div className="avatar-title">
                        <p>Evano</p>
                        <p>Project Manager</p>
                    </div>
                    <div className="d-down">
                        <IoIosArrowDown color='#B4B3E2' />
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar