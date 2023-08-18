import styled from '@emotion/styled';
import React from 'react';
import { latarBelakang } from '../constants/ConstText';
const HomeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	padding: 0.5rem;
	gap: 1rem;
	margin-top: 1rem;
	box-sizing: border-box;

	h1 {
		text-transform: capitalize;
		color: red;
	}
	span {
		height: 50vh;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		p {
			width: 90%;
			text-indent: 2rem;
			text-align: justify;
			padding: 0.25rem;
			font-size: 16px;
		}
	}

	div {
		background-color: red;
		bottom: 0%;
		margin-top: 0.5rem;
		padding: 0.5rem 4rem 0.5rem 4rem;

		border-radius: 10rem;
		h1 {
			color: white;
		}
	}
`;
const Home: React.FC = () => {
	return (
		<HomeWrapper>
			<h1>Latar Belakang</h1>
			<span>
				<p>{latarBelakang.paragraphone}</p>
				<p>{latarBelakang.paragraphtwo}</p>
			</span>

			<div>
				<h1>bupati cup #2</h1>
			</div>
		</HomeWrapper>
	);
};

export default Home;
