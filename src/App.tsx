import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { Counter } from "./components/Counter";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";

import "./index.scss";

const App = () => {
	return (
		<div className='app'>
			<Link to={"/"}>Main</Link>
			<Link to={"/about"}>About</Link>
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
			Hello styles
			<Counter />
		</div>
	);
};

export default App;
