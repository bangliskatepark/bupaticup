import styled from '@emotion/styled';
import React from 'react';
import { height } from '../constants/ConstStyle';
import LogoBS from './LogoBS';
import { Turn as Hamburger } from 'hamburger-react';
import { useDom } from '../context/domProvider';
import { NavLink } from 'react-router-dom';
import useMedia from '../hooks/useMedia';
import { IFEComp } from './IFEComp';
const NavbarWrapper = styled.nav`
	background-color: red;
	height: ${height};
	position: fixed;
	width: 100vw;
	top: 0%;
	left: -50%;
	margin-left: 50%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0.25rem;
	box-sizing: border-box;
	z-index: 50;
	div:nth-of-type(1) {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
		color: white;
		text-transform: capitalize;
		a {
			font-size: 15px;
			text-decoration: none;
			color: white;
		}
	}
`;

const Navbar: React.FC = () => {
	const { isToggle, setToggle } = useDom();
	const matches = useMedia('(min-width: 490px)');
	console.info(isToggle);
	return (
		<NavbarWrapper>
			<LogoBS size='60px' />
			<div>
				<IFEComp
					state={matches}
					firstChild={
						<React.Fragment>
							<NavLink to={'/'}>
								<h1>home</h1>
							</NavLink>
							<NavLink to={'/rab'}>
								<h1>rab</h1>
							</NavLink>
							<NavLink to={'/rundown'}>
								<h1>rundown</h1>
							</NavLink>
							<NavLink to={'/veneu'}>
								<h1>veneu</h1>
							</NavLink>
							<NavLink to={'/event'}>
								<h1>Event Documentation</h1>
							</NavLink>
						</React.Fragment>
					}
					secondChild={
						<Hamburger
							toggle={() => setToggle((prev) => !prev)}
							toggled={isToggle}
						/>
					}
				/>
			</div>
		</NavbarWrapper>
	);
};

export default Navbar;
