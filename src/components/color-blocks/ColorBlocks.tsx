import * as React from "react";
import classes from "./ColorBlocks.module.css";
import { generateRandomColors } from "./colorBlocks.utils";

interface OwnProps {
	onChange?: (color: string) => void;
	width?: number;
	height?: number;
}

type Props = React.PropsWithChildren<OwnProps>;

export function ColorBlocks(props: Props) {
	const { onChange, width = 10, height = 10 } = props;

	const randomColors = generateRandomColors(1000);

	return (
		<div className={classes.colorBlocks}>
			{randomColors.map((color) => (
				<div
					key={color}
					className={classes.colorBlock}
					style={{ backgroundColor: color, width, height }}
					onClick={() => onChange?.(color)}
				/>
			))}
		</div>
	);
}
