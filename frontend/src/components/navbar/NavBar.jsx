import { useContext, useState } from 'react';
import Logo from '../../assets/logo.jpg'
import { Icon } from '../../style/Icons';
import Search from '../search/Search';
import SideBar from '../SideBar';
import {Link} from 'react-router-dom'
import './Navbar.css'
import { Store } from '../../Store';


export const NavBar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    const {state} = useContext(Store);
    const {cart} = state;

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
                        <Link to='/cart' className='nav__menu_item' onClick={closeMobileMenu}>
                            Cart
                            {cart.cartItems.length > 0 && (
                                <span 
                                className="position-absolute 
                                top-10 
                                start-10 
                                translate-middle 
                                badge 
                                rounded-pill 
                                bg-danger"
                                >
                                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                                </span> 
                                    )}
                                </Link>
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

