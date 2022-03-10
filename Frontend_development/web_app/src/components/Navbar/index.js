import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
import {Link} from 'react-router-dom'
const Navbar = () => {
return (
	
	<Nav>
		<Bars />

		<NavMenu>
        <NavLink to='/home' activeStyle>
			Home
		</NavLink>
		<NavLink to='/form' activeStyle>
			Form
		</NavLink>
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
		<NavLink to='/form' activeStyle>
			Contact us
		</NavLink>
		{/*<NavLink to='/blogs' activeStyle>
			Blogs
		</NavLink>
		<NavLink to='/sign-up' activeStyle>
			Sign Up
</NavLink>*/}
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='./events'>Enter Your Details HERE</NavBtnLink>
		</NavBtn>
	</Nav>    
);
};

export default Navbar;
