import React, { Component } from "react";
import { Header, Grid, Container, Segment, Button } from "semantic-ui-react";
const HiTyra = ({ onAccept }) => {
	return (
		<Segment secondary>
			<Grid.Row>
				<Grid.Column width={12}>Hi Tyra!</Grid.Column>
				<Grid.Column width={2}>
					<Button
						floated="right"
						content="Send"
						icon="right arrow"
						labelPosition="right"
						onClick={onAccept}
					/>
				</Grid.Column>
			</Grid.Row>
		</Segment>
	);
};
export default HiTyra;
