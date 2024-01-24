import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { Theme } from "./providers/ThemeProvider/lib/ThemeContext";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

import "./styles/index.scss";

const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames("app", {}, [theme])}>
			<Link to={"/"}>Main</Link>
			<Link to={"/about"}>About</Link>
			<button onClick={toggleTheme}>
				{theme === Theme.DARK ? Theme.LIGHT : Theme.DARK}
			</button>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route
						path={"/"}
						element={<MainPage />}
					/>
					<Route
						path={"/about"}
						element={<AboutPage />}
					/>
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
