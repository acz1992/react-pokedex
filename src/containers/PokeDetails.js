/* import React, { Component } from "react";
import axios from "axios";
import { POKEMON_API_URL } from "../config";
import {
	CircularProgress,
	Box,
	withStyles,
	Typography,
} from "@material-ui/core";

const styles = (theme) => ({
	pokedexContainer: {
		height: "80vh",
		backgroundColor: "black",
		marginTop: "50px",
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

		if (match && match.params) {
			const { id } = match.params;

			axios.get(POKEMON_API_URL + "/" + id).then((response) => {
				if (response.status >= 200 && response.status < 300) {
					this.setState({ pokemon: response.data });
				}
			});
		} else {
			console.log("Fuck shit");
		}
	}

	render() {
		const { pokemon } = this.state;
		if (pokemon) {
			const { name } = pokemon;
			return (
				<Box>
					<Box className={styles.pokedexContainer}>
						<Typography variant="h1" className={styles.textTitle}>
							{name}
						</Typography>
					</Box>
				</Box>
			);
		} else {
			<CircularProgress></CircularProgress>;
		}
	}
}

export default withStyles(styles)(PokeDetails);
 */
