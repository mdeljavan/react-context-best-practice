import * as React from "react";
import { useImprovedPerformanceContext } from "./context";
import { ColorBlocks } from "src/components/color-blocks";
interface OwnProps {}

type Props = React.PropsWithChildren<OwnProps>;

export function ColorBlocksSelector(props: Props) {
	const { onColorChange } = useImprovedPerformanceContext();

	return <ColorBlocks onChange={onColorChange} />;
}
