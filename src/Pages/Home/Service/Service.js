/** @format */

import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
const Service = (props) => {
	const { name, img, description } = props.services;

	return (
		<Grid item xs={2} sm={4} md={4}>
			<Card sx={{ minWidth: 275 }}>
				<CardMedia
					sx={{ height: 140 }}
					style={{ width: "auto", height: "80px", margin: "0 auto" }}
					image={img}
					title="green iguana"
				/>
				<CardContent>
					<Typography variant="h5" component="div">
						{name}
					</Typography>
					<Typography variant="body2">{description}</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default Service;
