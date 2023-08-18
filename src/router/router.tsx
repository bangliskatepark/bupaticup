import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Rab from '../pages/Rab';
import Layout from '../Layouts/Layout';
import React from 'react';
import Rundown from '../pages/Rundown';
import Event from '../pages/Event';
import Veneu from '../pages/Veneu';

const route = createHashRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/rab',
				element: <Rab />,
			},
			{
				path: '/rundown',
				element: <Rundown />,
			},
			{
				path: '/event',
				element: <Event />,
			},
			{
				path: 'veneu',
				element: <Veneu />,
			},
		],
	},
]);

const Navigator: React.FC = (): React.ReactElement => {
	return <RouterProvider router={route} />;
};
export default Navigator;
