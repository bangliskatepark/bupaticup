import styled from '@emotion/styled';
import React from 'react';
import { Turn as Hamburger } from 'hamburger-react';
import LogoBS from './LogoBS';
import { useDom } from '../context/domProvider';
import { height } from '../constants/ConstStyle';
const NavbarSliderWrapper = styled.div`
	height: 100vh;
	width: 100%;
	background-color: red;
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: 0.5rem;
	box-sizing: border-box;
	z-index: 999;
	h1 {
		text-transform: capitalize;
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
				<h1>rab</h1>
				<h1>rundown</h1>
				<h1>veneu</h1>
				<h1>Event Documentation</h1>
			</div>
		</NavbarSliderWrapper>
	);
};
export default NavbarSlider;
