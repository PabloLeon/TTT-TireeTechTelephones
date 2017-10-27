import React, { Component } from "react";
import { Grid, Menu, Segment } from "semantic-ui-react";

export default class MenuExampleTabularOnRight extends Component {
	state = {
		activeItem: "article",
		relatedArticles: [
			{ topic: "animals", articleId: 1 },
			{ topic: "people", articleId: 2 },
			{ topic: "sea", articleId: 3 },
			{ topic: "culture", articleId: 4 }
		]
	};

	handleItemClick = (e, { name }) => {
		this.setState({ activeItem: name });
	};
	render() {
		const { activeItem } = this.state;

		return (
			<Grid>
				<Grid.Column stretched width={14}>
					{this.props.children}
				</Grid.Column>

				<Grid.Column width={2}>
					<Menu fluid vertical tabular="right">
						{this.state.relatedArticles.map(item => (
							<Menu.Item
								name={item.topic}
								active={activeItem === item}
								onClick={this.handleItemClick}
							/>
						))}
						<Menu.Item name="Map" active={false} onClick={this.displayMap} />
					</Menu>
				</Grid.Column>
			</Grid>
		);
	}
}
