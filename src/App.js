import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavigator from "./components/AppNavigator";

import Pokedex from "./containers/Pokedex";
import PokemonDetails from "./containers/PokemonDetails";
/* import PokeDetails from "./containers/PokeDetails"; */

export default function App() {
	return (
		<Router>
			<AppNavigator />
			<Routes>
				<Route exact path="/" element={<Pokedex />} />
				<Route exact path="/pokemon/:id" element={<PokemonDetails />} />
			</Routes>
		</Router>
	);
}
