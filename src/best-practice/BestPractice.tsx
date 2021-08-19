import * as React from "react";
import { ColorBlocks } from "src/components/color-blocks";
import { ColorBlocksSelector } from "./ColorBlocks";
import { ColorProvider, InputProvider } from "./providers";
import { Input } from "./Input";
interface OwnProps {}

type Props = React.PropsWithChildren<OwnProps>;

export function BestPractice(props: Props) {
	return (
		<ColorProvider>
			<InputProvider>
				<Input />
				<ColorBlocksSelector />
				<div style={{ width: 100, margin: 10 }}>
					<ColorBlocks width={2} height={2} />
				</div>
			</InputProvider>
		</ColorProvider>
	);
}
