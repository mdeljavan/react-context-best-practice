import * as React from "react";

interface ImprovedPerformanceContextProps {
	color: string;
	inputValue: string;
	onColorChange: React.Dispatch<React.SetStateAction<string>>;
	onInputValueChange: React.Dispatch<React.SetStateAction<string>>;
}

export const ImprovedPerformanceContext =
	React.createContext<ImprovedPerformanceContextProps | null>(null);

export const useImprovedPerformanceContext = () => {
	const color = React.useContext(ImprovedPerformanceContext);

	if (color === null) {
		throw new Error(
			"useImprovedPerformanceContext must be used within ImprovedPerformanceContext"
		);
	}

	return color;
};
