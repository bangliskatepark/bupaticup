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
	gap: 1rem;
	padding-bottom: 1rem;
	box-sizing: border-box;

	h1 {
		margin-top: 1rem;
		text-transform: capitalize;
		color: #ffffff;
	}
	h1:nth-of-type(2) {
		margin: 0;
		border-bottom: 2px solid white;
	}
	table {
		color: white;

		border-bottom: 2px solid white;
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
			background-position: center;
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
			margin: 0;
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
			<h1>Waktu Pelaksanaan</h1>
			<table>
				<td>
					<tr>Hari/Tanggal</tr>
					<tr>Waktu</tr>
					<tr>Tempat</tr>
				</td>
				<td>
					<tr>25 – 27 Agustus 2022</tr>
					<tr>Pukul 08.00 Wita – Selesai</tr>
					<tr>Bangli Skatepark</tr>
				</td>
			</table>
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
