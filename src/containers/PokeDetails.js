import React, { Component } from "react";
import axios from "axios";
import { POKEMON_API_URL } from "../config";
import { CircularProgress, Box, withStyles } from "@material-ui/core";
import PokemonDetails from "./PokemonDetails";

const styles = (theme) => ({
	pokedexContainer: {
		height: "80vh",
		backgroundColor: "black",
	},
});

class PokeDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pokemon: null,
		};
	}

	componentDidMount() {
		const { match, styles } = this.props;
		const { id } = match?.params;
		axios.get(POKEMON_API_URL + "/" + id).then((response) => {
			if (response.status >= 200 && response.status < 300) {
				this.setState({ pokemon: response.data });
			}
		});
	}

	render() {
		const { pokemon } = this.state;
		if (pokemon) {
			const { name } = pokemon;
			return (
				<Box>
					<Box className=""></Box>
				</Box>
			);
		} else {
			<CircularProgress></CircularProgress>;
		}
	}
}

export default withStyles(styles)(PokemonDetails);
