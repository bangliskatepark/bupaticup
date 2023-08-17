import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './Layouts/Layout';
import { DomProvider } from './context/domProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<DomProvider>
			<Layout />
		</DomProvider>
	</React.StrictMode>
);
