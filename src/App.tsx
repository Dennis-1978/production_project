import { Suspense, useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { Counter } from "./components/Counter";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { Theme } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

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
						element={<MainPageAsync />}
					/>
					<Route
						path={"/about"}
						element={<AboutPageAsync />}
					/>
				</Routes>
			</Suspense>
			<Counter />
		</div>
	);
};

export default App;
