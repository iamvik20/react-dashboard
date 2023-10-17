// import React from 'react'
import { BiSearch } from "react-icons/bi";
import { RxHamburgerMenu } from 'react-icons/rx'

function Header({ OpenSidebar }) {
    return (
        <div className="header-container">
            <div className="user-title">
                <div className="hamburger">
                    <RxHamburgerMenu size='30px'
                        onClick={() => OpenSidebar()}
                    />
                </div>
                <h2>Hello Shahrukh👋,</h2>
            </div>
            <div className="search-bar">
                <BiSearch size='25px' color="grey" />
                <input type="text" name="searcg" placeholder="Search" />
            </div>
        </div>
    )
}

export default Header