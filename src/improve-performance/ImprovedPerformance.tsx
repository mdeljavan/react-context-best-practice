import * as React from "react";
import { ColorBlocks } from "src/components/color-blocks";
import { ImprovedPerformanceProvider } from "./ImprovedPerformanceProvider";
interface OwnProps {}

type Props = React.PropsWithChildren<OwnProps>;

export function ImprovedPerformance(props: Props) {
	return (
		<ImprovedPerformanceProvider>
			<div style={{ width: 100, margin: 10 }}>
				<ColorBlocks width={2} height={2} />
			</div>
		</ImprovedPerformanceProvider>
	);
}
