import * as React from "react";
import { BadPerformance } from "./bad-performance/BadPerformance";
import classes from "./App.module.css";
import { ImprovedPerformance } from "./improve-performance/ImprovedPerformance";
import { BestPractice } from "./best-practice/BestPractice";

enum Pattern {
	"BadPerformance" = "BadPerformance",
	"ImprovedPerformance" = "ImprovedPerformance",
	"BestPractice" = "BestPractice",
}

function App() {
	const [pattern, setPattern] = React.useState<Pattern>(
		Pattern.BadPerformance
	);

	const handlePatternChange = ({
		target: { value },
	}: React.ChangeEvent<HTMLSelectElement>) => {
		setPattern(value as Pattern);
	};

	return (
		<div>
			<select value={pattern} onChange={handlePatternChange}>
				<option value={Pattern.BadPerformance}>Bad Performance</option>
				<option value={Pattern.ImprovedPerformance}>
					Improved Performance
				</option>
				<option value={Pattern.BestPractice}>Best Practice</option>
			</select>
			<div className={classes.App}>
				{pattern === Pattern.BadPerformance ? <BadPerformance /> : null}
				{pattern === Pattern.ImprovedPerformance ? (
					<ImprovedPerformance />
				) : null}
				{pattern === Pattern.BestPractice ? <BestPractice /> : null}
			</div>
		</div>
	);
}

export default App;
