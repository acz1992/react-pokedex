import React from "react";
import {
	Grid,
	Card,
	CardMedia,
	CardContent,
	Typography,
	makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	card: {
		cursor: "pointer",
		backgroundColor: "black",
		color: "white",
		"&:hover": {
			backgroundColor: "rgb(90,90,90)",
		},
	},
	cardMedia: {
		margin: "auto",
		width: 130,
		height: 130,
	},
	CardContent: {
		textAlign: "center",
	},
}));

export default function PokemonCard(props) {
	const classes = useStyles();
	const { pokemon, image } = props;
	const { id, name } = pokemon;
	return (
		<Grid item xs={12} sm={2} key={id}>
			<Card className={classes.card}>
				<CardMedia
					className={classes.cardMedia}
					image={image}
				></CardMedia>
				<CardContent className={classes.CardContent}>
					<Typography>{name}</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
}
