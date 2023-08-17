import React from 'react';

interface IDomState {
	isToggle: boolean;
	setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
interface IUseDomProvider {
	children: React.JSX.Element;
}
const domState = React.createContext<IDomState>({
	isToggle: false,
	setToggle: () => undefined,
});
const DomProvider: React.FC<IUseDomProvider> = ({ children }) => {
	const [isToggle, setToggle] = React.useState<boolean>(false);
	const initialValues = {
		isToggle,
		setToggle,
	};
	return (
		<domState.Provider value={initialValues}>{children}</domState.Provider>
	);
};
const useDom = (): IDomState => {
	const context = React.useContext<IDomState>(domState);
	if (context === undefined) {
		throw new Error('use dom provider');
	}
	return context;
};

export { useDom, DomProvider };
