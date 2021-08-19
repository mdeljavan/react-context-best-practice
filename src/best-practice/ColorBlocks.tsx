import * as React from "react";
import { ColorBlocks } from "src/components/color-blocks";
import { useColorSetStateContext } from "./providers/ColorProvider";
interface OwnProps {}

type Props = React.PropsWithChildren<OwnProps>;

export function ColorBlocksSelector(props: Props) {
	const onColorChange = useColorSetStateContext();

	return <ColorBlocks onChange={onColorChange} />;
}
