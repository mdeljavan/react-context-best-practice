import * as React from "react";

interface BadPerformanceContextProps {
	color: string;
	inputValue: string;
	onColorChange: React.Dispatch<React.SetStateAction<string>>;
	onInputValueChange: React.Dispatch<React.SetStateAction<string>>;
}

export const BadPerformanceContext =
	React.createContext<BadPerformanceContextProps | null>(null);

export const useBadPerformanceContext = () => {
	const color = React.useContext(BadPerformanceContext);

	if (color === null) {
		throw new Error(
			"useBadPerformanceContext must be used within BadPerformanceContext"
		);
	}

	return color;
};
