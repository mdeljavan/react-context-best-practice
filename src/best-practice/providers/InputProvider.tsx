import * as React from "react";

const InputStateContext = React.createContext<string | null>(null);
const InputSetStateContext = React.createContext<React.Dispatch<
	React.SetStateAction<string>
> | null>(null);

export const useInputStateContext = () => {
	const value = React.useContext(InputStateContext);

	if (value === null) {
		throw new Error(
			"useInputStateContext must be used within InputProvider"
		);
	}

	return value;
};

export const useInputSetStateContext = () => {
	const setValue = React.useContext(InputSetStateContext);

	if (setValue === null) {
		throw new Error(
			"useInputSetStateContext must be used within InputProvider"
		);
	}

	return setValue;
};

interface OwnProps {}

type Props = React.PropsWithChildren<OwnProps>;

export function InputProvider(props: Props) {
	const [inputValue, setInputValue] = React.useState("");

	return (
		<InputSetStateContext.Provider value={setInputValue}>
			<InputStateContext.Provider value={inputValue}>
				{props.children}
			</InputStateContext.Provider>
		</InputSetStateContext.Provider>
	);
}
