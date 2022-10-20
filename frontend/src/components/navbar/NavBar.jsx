import { useState } from 'react';
import Logo from '../../assets/logo.jpg'
import { Icon } from '../../style/Icons';
import Search from '../search/Search';
import SideBar from '../SideBar';
import {Link} from 'react-router-dom'
import './Navbar.css'

export const NavBar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
        <nav className="nav__container">
            <figure className="nav__figure">
                <Link to='/'>
                <img className="nav__img" src={Logo} alt="" onClick={closeMobileMenu}/>
                </Link>
            </figure>
                <div className={click ? "nav-options active" : "nav-options"}>
                    <div className='nav__menu_link'>
                        <div className='nav__menu_item' onClick={closeMobileMenu}><span>categorias</span></div>
                    </div>
                    <Search/>
                    <div className='nav__menu_login'>
                        <Link to='/signup' className='nav__menu_item' onClick={closeMobileMenu}><span>Login</span></Link>
                    </div>
                </div>
                        <div className="mobile-menu" onClick={handleClick}>
                            {click ? (
                                <Icon className="fas fa-times" />
                            ) : (
                                <Icon className="fas fa-bars" />
                            )}
                        </div>
        </nav>
        {/* <SideBar/> */}
        </>
    )
};

