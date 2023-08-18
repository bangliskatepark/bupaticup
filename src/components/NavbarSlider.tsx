import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { Turn as Hamburger } from 'hamburger-react';
import { useDom } from '../context/domProvider';
import { height } from '../constants/ConstStyle';
import LogoBS from './LogoBS';
const NavbarSliderWrapper = styled.div`
	height: 100vh;
	width: 100%;
	background-color: red;
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0.25rem;
	box-sizing: border-box;
	z-index: 999;
	gap: 2rem;
	a {
		color: white;
		text-decoration: none;
		h1 {
			text-transform: capitalize;
		}
	}
	div:nth-of-type(1) {
		width: 100%;
		height: ${height};
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
`;
const NavbarSlider: React.FC = () => {
	const { isToggle, setToggle } = useDom();
	return (
		<NavbarSliderWrapper>
			<div>
				<Hamburger
					toggle={() => setToggle((prev) => !prev)}
					toggled={isToggle}
				/>
			</div>
			<div>
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
			</div>
			<LogoBS size='280px' />
		</NavbarSliderWrapper>
	);
};
export default NavbarSlider;
