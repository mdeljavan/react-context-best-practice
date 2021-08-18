import * as React from "react";
import { useBadPerformanceContext } from "./context";
import { ColorBlocks } from "src/components/color-blocks";
interface OwnProps {}

type Props = React.PropsWithChildren<OwnProps>;

export function ColorBlocksSelector(props: Props) {
	const { onColorChange } = useBadPerformanceContext();

	return <ColorBlocks onChange={onColorChange} />;
}
