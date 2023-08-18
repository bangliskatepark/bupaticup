import styled from '@emotion/styled';
import React from 'react';
import { height } from '../constants/ConstStyle';
import LogoBS from './LogoBS';
import { Turn as Hamburger } from 'hamburger-react';
import { useDom } from '../context/domProvider';
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
		h1 {
			font-size: 15px;
		}
	}
`;

const Navbar: React.FC = () => {
	const { isToggle, setToggle } = useDom();
	console.info(isToggle);
	return (
		<NavbarWrapper>
			<LogoBS size='60px' />
			<div>
				<Hamburger
					toggle={() => setToggle((prev) => !prev)}
					toggled={isToggle}
				/>
			</div>
		</NavbarWrapper>
	);
};

export default Navbar;
