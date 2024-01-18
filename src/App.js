import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavigator from "./components/AppNavigator";

import Pokedex from "./containers/Pokedex";

export default function App() {
	return (
		<Router>
			<AppNavigator />
			<Routes>
				<Route path="/" element={<Pokedex />} />
			</Routes>
		</Router>
	);
}
