import React from "react";
import { Segment, Grid, Button, Image, Header } from "semantic-ui-react";

const SelectView = ({ onArticle, onMap, onMusic }) => {
	return (
		<Segment secondary>
			<Grid columns={3}>
				<Grid.Row centered verticalAlign>
					<Grid.Column>
						<Header size="small">Show me the article!</Header>
						<Image
							onClick={onArticle}
							src="articlesmall.svg"
							as={Button}
							size="medium"
						/>
					</Grid.Column>
					<Grid.Column>
						<Header size="small">Show me the map!</Header>
						<Image onClick={onMap} src="map.svg" as={Button} size="medium" />
					</Grid.Column>
					<Grid.Column>
						<Header size="small">I want to listen to some music!</Header>
						<Image
							onClick={onMusic}
							src="phonemusic.svg"
							as={Button}
							size="medium"
						/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	);
};

export default SelectView;
