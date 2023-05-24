/** @format */

import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "../Service/Service";


const services = [
	{
		name: "Teeth",
		description:
			"If you prefer to design for a fixed set of sizes instead of trying to accommodate a fully fluid viewport, you can",
		img: fluoride,
	},
	{
		name: "Teeth",
		description:
			"If you prefer to design for a fixed set of sizes instead of trying to accommodate a fully fluid viewport, you can",
		img: cavity,
	},
	{
		name: "Teeth",
		description:
			"If you prefer to design for a fixed set of sizes instead of trying to accommodate a fully fluid viewport, you can",
		img: whitening,
	},
];
const Services = () => {
	return (
		<div>
			<Box sx={{ flexGrow: 1, border: 0, boxShadow: 0 }}>
				<Container>
					<Typography variant="h6" component="div">
						Our Services
					</Typography>
					<Typography variant="h4" component="div">
						Service We Provide
					</Typography>
					<Grid
						container
						spacing={{ xs: 2, md: 3 }}
						columns={{ xs: 4, sm: 8, md: 12 }}
					>
						{services.map((service) => (
							<Service key={service.name} service={service} />
						))}
					</Grid>
				</Container>
			</Box>
		</div>
	);
};

export default Services;
