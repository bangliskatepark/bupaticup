import React from 'react';
interface IIFComp {
	state: boolean;
	children: React.JSX.Element;
}
const IFComp: React.FC<IIFComp> = ({ state, children }) => {
	return state ? <React.Fragment>{children}</React.Fragment> : null;
};
interface IIFEComp {
	firstChild: React.JSX.Element;
	secondChild: React.JSX.Element;
	state: boolean;
}
const IFEComp: React.FC<IIFEComp> = ({ firstChild, secondChild, state }) => {
	return state ? (
		<React.Fragment>{firstChild}</React.Fragment>
	) : (
		<React.Fragment>{secondChild}</React.Fragment>
	);
};
export { IFComp, IFEComp };
