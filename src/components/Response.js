import React, { Component } from "react";
import { Header, Grid, Container, Segment, Button } from "semantic-ui-react";

import Typist from "react-typist";
//TODO: could have button only show when typing done
const Response = ({ text, onAccept }) => {
	return (
		<Segment secondary>
			<Grid.Row>
				<Grid.Column width={12}>
					<Typist>{text}</Typist>
				</Grid.Column>
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
export default Response;
