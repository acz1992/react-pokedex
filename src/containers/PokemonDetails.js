import axios from "axios";
import React, { useEffect, useState } from "react";
import { POKEMON_API_URL } from "../config";
import { useParams } from "react-router-dom";
import { CircularProgress, Box } from "@material-ui/core";

const styles = (theme) => ({
	pokedexContainer: {
		height: "80vh",
		backgroundColor: "black",
	},
});

export default function PokemonDetails() {
	const { id } = useParams();
	const [pokemon, setPokemon] = useState(null);

	useEffect(() => {
		if (id) {
			axios
				.get(POKEMON_API_URL + "/" + id)
				.then((response) => {
					if (response.status >= 200 && response.status < 300) {
						console.log("Pokemon Data:", response.data);
						setPokemon(response.data);
					} else {
						console.error(
							"Error fetching Pokemon details:",
							response.status,
							response.statusText
						);
					}
				})
				.catch((error) => {
					console.error("Error:", error);
				});
		} else {
			console.error("No 'id' parameter found");
		}
	}, [id]);

	return (
		<div>
			{pokemon ? (
				<Box>
					<Box></Box>
				</Box>
			) : (
				<CircularProgress />
			)}
		</div>
	);
}
