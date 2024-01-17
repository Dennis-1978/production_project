import { Routes, Route, Link } from "react-router-dom";

import { Counter } from "./components/Counter";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";

import "./index.scss";

const App = () => {
	return (
		<div className='app'>
			<Link to={'/'}>Main</Link>
			<Link to={'/about'}>About</Link>
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
			Hello styles
			<Counter />
		</div>
	);
};

export default App;
