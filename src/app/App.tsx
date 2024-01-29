import { Link } from "react-router-dom";

import { Theme } from "./providers/ThemeProvider/lib/ThemeContext";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

import "./styles/index.scss";

const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames("app", {}, [theme])}>
			<Navbar />
			<button onClick={toggleTheme}>
				{theme === Theme.DARK ? Theme.LIGHT : Theme.DARK}
			</button>
			<AppRouter />
		</div>
	);
};

export default App;
