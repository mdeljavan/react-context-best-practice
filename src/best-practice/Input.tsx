import * as React from "react";
import { Input as Inp } from "src/components/input";
import {
	useColorStateContext,
	useInputSetStateContext,
	useInputStateContext,
} from "./providers";

interface OwnProps {}

type Props = React.PropsWithChildren<OwnProps>;

export function Input(props: Props) {
	const color = useColorStateContext();
	const inputValue = useInputStateContext();
	const onInputValueChange = useInputSetStateContext();

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
