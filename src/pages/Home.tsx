import styled from '@emotion/styled';
import React from 'react';
import { latarBelakang } from '../constants/ConstText';
import poster from '../assets/poster.jpeg';
interface IHomeWrapper {
	img: string;
}
const HomeWrapper = styled.div<IHomeWrapper>`
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
		color: #ffffff;
	}
	div:nth-of-type(1) {
		height: 50%;
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
			color: #ffffff;
		}
	}
	div:nth-of-type(2) {
		position: absolute;
		z-index: -2;
		width: 100%;
		height: 100%;
		display: flex;
		span {
			display: block;
			position: relative;
			background-image: url(${(props) => props.img});
			background-size: cover;
			background-repeat: no-repeat;
			width: 100%;
			height: 100%;
		}
	}
	div:nth-of-type(3) {
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
		<HomeWrapper img={poster}>
			<h1>Latar Belakang</h1>
			<div>
				<p>{latarBelakang.paragraphone}</p>
				<p>{latarBelakang.paragraphtwo}</p>
			</div>
			<div>
				<span />
			</div>
			<div>
				<h1>bupati cup #2</h1>
			</div>
		</HomeWrapper>
	);
};

export default Home;
