import * as React from "react";
import { ColorBlocksSelector } from "./ColorBlocks";
import { BadPerformanceContext } from "./context";
import { Input } from "./Input";
import { ColorBlocks } from "src/components/color-blocks";
interface OwnProps {}

type Props = React.PropsWithChildren<OwnProps>;

export function BadPerformance(props: Props) {
	const [color, setColor] = React.useState("black");
	const [inputValue, setInputValue] = React.useState("");

	const value = {
		color,
		onColorChange: setColor,
		inputValue,
		onInputValueChange: setInputValue,
	};

	return (
		<BadPerformanceContext.Provider value={value}>
			<Input />
			<ColorBlocksSelector />
			<div style={{ width: 100, margin: 10 }}>
				<ColorBlocks width={2} height={2} />
			</div>
		</BadPerformanceContext.Provider>
	);
}
