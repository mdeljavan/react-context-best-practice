import * as React from "react";
import classes from "./Input.module.css";

interface OwnProps
	extends React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {}

type Props = React.PropsWithChildren<OwnProps>;

export function Input(props: Props) {
	return <input className={classes.Input} {...props} />;
}
