import * as React from "react";
import { Input as Inp } from "src/components/input";
import { useBadPerformanceContext } from "./context";

interface OwnProps {}

type Props = React.PropsWithChildren<OwnProps>;

export function Input(props: Props) {
	const { color, inputValue, onInputValueChange } =
		useBadPerformanceContext();

	const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;

		onInputValueChange(value);
	};

	return (
		<Inp
			value={inputValue}
			onChange={handleValueChange}
			style={{ color }}
		/>
	);
}
