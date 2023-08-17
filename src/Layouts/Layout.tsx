import React from 'react';
import Navbar from '../components/Navbar';
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import { height } from '../constants/ConstStyle';
import Home from '../pages/Home';
import NavbarSlider from '../components/NavbarSlider';
import { IFEComp } from '../components/IFEComp';
import { useDom } from '../context/domProvider';

const InjectGlobal = css`
	* {
		padding: unset;
		margin: unset;
		box-sizing: unset;
	}
	body {
		font-family: Helvetica, Sans-Serif;
	}
`;
const MainLayout = styled.main`
	position: relative;
	top: ${height};
	height: calc(100vh - ${height});
`;
const Layout = () => {
	const { isToggle } = useDom();
	return (
		<React.Fragment>
			<Global styles={InjectGlobal} />

			<IFEComp
				state={isToggle}
				firstChild={<NavbarSlider />}
				secondChild={
					<React.Fragment>
						<Navbar />
						<MainLayout>
							<Home />
						</MainLayout>
					</React.Fragment>
				}
			/>
		</React.Fragment>
	);
};

export default Layout;
