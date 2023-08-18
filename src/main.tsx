import React from 'react';
import ReactDOM from 'react-dom/client';
import { DomProvider } from './context/domProvider';
import Navigator from './router/router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<DomProvider>
			<Navigator />
		</DomProvider>
	</React.StrictMode>
);
