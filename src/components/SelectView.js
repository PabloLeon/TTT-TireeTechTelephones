import React from "react";
import { Segment, Grid, Image, Header } from "semantic-ui-react";

const SelectView = ({ options, selectOption }) => {
	return (
		<Segment secondary>
			<Grid columns={options.length}>
				<Grid.Row centered verticalAlign>
					{options.map(item => (
						<Grid.Column>
							<Header size="small">{item.text}</Header>
							<Image
								onClick={selectOption(item.action)}
								src={item.src}
								size="medium"
							/>
						</Grid.Column>
					))}
				</Grid.Row>
			</Grid>
		</Segment>
	);
};

export default SelectView;
