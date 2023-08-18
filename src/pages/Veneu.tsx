import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';
import GoogleMapReact from 'google-map-react';
import {
	Veneu1,
	Veneu10,
	Veneu2,
	Veneu3,
	Veneu4,
	Veneu5,
	Veneu6,
	Veneu7,
	Veneu8,
	Veneu9,
} from '../assets/VENEU';
import styled from '@emotion/styled';
import 'react-image-gallery/styles/css/image-gallery.css';
const images: ReadonlyArray<ReactImageGalleryItem> = [
	{
		original: Veneu1,
		thumbnail: Veneu1,
		loading: 'lazy',
		originalHeight: 300,
	},
	{
		original: Veneu2,
		thumbnail: Veneu2,
		loading: 'lazy',
		originalHeight: 300,
	},
	{
		original: Veneu3,
		thumbnail: Veneu3,
		loading: 'lazy',
		originalHeight: 300,
	},
	{
		original: Veneu4,
		thumbnail: Veneu4,
		loading: 'lazy',
		originalHeight: 300,
	},
	{
		original: Veneu5,
		thumbnail: Veneu5,
		loading: 'lazy',
		originalHeight: 300,
	},
	{
		original: Veneu6,
		thumbnail: Veneu6,
		loading: 'lazy',
		originalHeight: 300,
	},
	{
		original: Veneu7,
		thumbnail: Veneu7,
		loading: 'lazy',
		originalHeight: 300,
	},
	{
		original: Veneu8,
		thumbnail: Veneu8,
		loading: 'lazy',
		originalHeight: 300,
	},
	{
		original: Veneu9,
		thumbnail: Veneu9,
		loading: 'lazy',
		originalHeight: 300,
	},
	{
		original: Veneu10,
		thumbnail: Veneu10,
		loading: 'lazy',
		originalHeight: 300,
	},
];
const VeneuWrapper = styled.div`
	h1 {
		text-transform: capitalize;
		font-size: 24px;
		text-align: center;
	}
	section {
		display: flex;
		margin: 0.25rem;
		gap: 0.25rem;
		flex-direction: column;
	}
	@media (max-width: 420px) {
		section {
			overflow-y: hidden;
			height: calc(100vh - 100px);
			padding: 0.5rem;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			gap: 0.25rem;
		}
	}
`;
const mapsProps = {
	center: {
		lat: -8.462656,
		lng: 115.353389,
	},
	zoom: 100,
};
const MarkerLocation = ({ text }: { text: string }) => {
	return (
		<div>
			<h1>{text}</h1>
		</div>
	);
};
const Veneu = () => {
	return (
		<VeneuWrapper>
			<h1>veneu bangli skatepark</h1>
			<section>
				<div>
					<ImageGallery
						items={images}
						autoPlay
						thumbnailPosition='right'
						isRTL={true}
						showIndex={true}
						useBrowserFullscreen={true}
						showFullscreenButton={false}
					/>
				</div>
				<div style={{ height: 280, width: '100%' }}>
					<GoogleMapReact
						center={mapsProps.center}
						zoom={mapsProps.zoom}>
						<MarkerLocation text='bangli skatepark' />
					</GoogleMapReact>
				</div>
			</section>
		</VeneuWrapper>
	);
};

export default Veneu;
