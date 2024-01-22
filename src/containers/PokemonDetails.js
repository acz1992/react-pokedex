import axios from "axios";
import React, { useEffect, useState } from "react";
import { POKEMON_API_URL } from "../config";
import { useParams } from "react-router-dom";
import {
	CircularProgress,
	Box,
	Typography,
	makeStyles,
	Grid,
	Button,
} from "@material-ui/core";

const capitalizeLetter = (string) => {
	return string.replace(/\b\w/g, (char) => char.toUpperCase());
};

const useStyles = makeStyles((theme) => ({
	pokedexContainer: {
		height: "84vh",
		backgroundColor: "black",
		color: "white",
		marginTop: 75,
		textAlign: "center",
		borderRadius: 5,
		paddingTop: 30,
	},
	textTitle: {
		textTransform: "upperCase",
		/* fontFamily: "Robotica", */
	},
	pokemonImage: {
		width: "170px",
		height: "170px",
	},
	pokemonInfoContainer: {
		bottom: 60,
		position: "absolute",
		width: "100%",
	},
	seperator: {
		height: "0.01mm",
		width: "95%",
	},
	favourites: {
		height: 50,
		width: 50,
		marginTop: 15,
	},
	text: {
		fontSize: 30,
	},
}));

export default function PokemonDetails() {
	const classes = useStyles();

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
					<Box className={classes.pokedexContainer}>
						<Typography variant="h1" className={classes.textTitle}>
							{pokemon.name}
						</Typography>
						<img
							alt="Sprite"
							className={classes.pokemonImage}
							src={pokemon.sprites.front_default}
						/>
						<img
							alt="Sprite"
							className={classes.pokemonImage}
							src={pokemon.sprites.back_default}
						/>
						<Box className={classes.pokemonInfoContainer}>
							<hr className={classes.seperator} />
							<Grid
								container
								spacing={10}
								justifyContent="center"
							>
								{/* <Grid item md={1}>
									<Button
										className={classes.favourites}
									></Button>
								</Grid> */}
								<Grid item md={2}>
									<Typography className={classes.text}>
										Name: <br />
										{capitalizeLetter(pokemon.name)}
									</Typography>
								</Grid>
								<Grid item md={2}>
									<Typography className={classes.text}>
										Height: <br /> {pokemon.height}m
									</Typography>
								</Grid>
								<Grid item md={2}>
									<Typography className={classes.text}>
										Weight: <br /> {pokemon.weight}kg
									</Typography>
								</Grid>

								{pokemon.types.map((pokemonType) => {
									console.log(pokemonType);
									const { name } = pokemonType.type;
									return (
										<Grid item md={2}>
											<Typography
												className={classes.text}
											>
												Type: <br />{" "}
												{capitalizeLetter(name)}
											</Typography>
										</Grid>
									);
								})}
							</Grid>
						</Box>
					</Box>
				</Box>
			) : (
				<CircularProgress />
			)}
		</div>
	);
}
