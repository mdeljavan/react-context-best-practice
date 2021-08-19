import * as React from "react";
import { ImprovedPerformanceContext } from "./context";

interface OwnProps {}

type Props = React.PropsWithChildren<OwnProps>;

export function ImprovedPerformanceProvider(props: Props) {
	const [color, setColor] = React.useState("black");
	const [inputValue, setInputValue] = React.useState("");

	const value = {
		color,
		onColorChange: setColor,
		inputValue,
		onInputValueChange: setInputValue,
	};

	return (
		<ImprovedPerformanceContext.Provider value={value}>
			{props.children}
		</ImprovedPerformanceContext.Provider>
	);
}
