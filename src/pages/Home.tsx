import styled from '@emotion/styled';
import React from 'react';
import { latarBelakang } from '../constants/ConstText';
const HomeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	h1 {
		text-transform: capitalize;
	}
	p {
		width: 90%;
		text-indent: 2rem;
		text-align: justify;
		padding: 0.25rem;
		font-size: 12px;
	}
	div {
		background-color: red;
		bottom: 0%;
		margin-top: 0.5rem;
		padding: 0.5rem 4rem 0.5rem 4rem;
		color: white;
		border-radius: 10rem;
	}
`;
const Home: React.FC = () => {
	return (
		<HomeWrapper>
			<h1>Latar Belakang</h1>
			<p>{latarBelakang.paragraphone}</p>
			<p>{latarBelakang.paragraphtwo}</p>
			<div>
				<h1>bupati cup #2</h1>
			</div>
		</HomeWrapper>
	);
};

export default Home;
