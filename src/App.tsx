import * as React from "react";
import { BadPerformance } from "./bad-performance/BadPerformance";
import classes from "./App.module.css";

function App() {
	return (
		<div className={classes.App}>
			<BadPerformance />
		</div>
	);
}

export default App;
