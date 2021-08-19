import * as React from "react";

const ColorStateContext = React.createContext<string | null>(null);
const ColorSetStateContext = React.createContext<React.Dispatch<
	React.SetStateAction<string>
> | null>(null);

export const useColorStateContext = () => {
	const color = React.useContext(ColorStateContext);

	if (color === null) {
		throw new Error(
			"useColorStateContext must be used within ColorProvider"
		);
	}

	return color;
};

export const useColorSetStateContext = () => {
	const setColor = React.useContext(ColorSetStateContext);

	if (setColor === null) {
		throw new Error(
			"useColorSetStateContext must be used within ColorProvider"
		);
	}

	return setColor;
};

interface OwnProps {}

type Props = React.PropsWithChildren<OwnProps>;

export function ColorProvider(props: Props) {
	const [color, setColor] = React.useState("");

	return (
		<ColorSetStateContext.Provider value={setColor}>
			<ColorStateContext.Provider value={color}>
				{props.children}
			</ColorStateContext.Provider>
		</ColorSetStateContext.Provider>
	);
}
