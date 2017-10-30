import React from "react";
import {
	Image,
	Label,
	Item,
	Segment,
	Button,
	Container,
	Grid,
	Menu
} from "semantic-ui-react";

//relatedTopics = [ {index: , topic: }]
class Article extends React.Component {
	render() {
		const { src } = this.props.image;
		return [
			<Grid as={Segment} secondary columns={2}>
				<Grid.Column as={Image} width={9} src={src} />
				<Grid.Column as={Container} width={7}>
					<p>{this.props.text}</p>
				</Grid.Column>
			</Grid>,
			<Menu color={"red"} inverted widths={4} as={Container}>
				<Menu.Item name="Back to Menu" onClick={this.props.onBack} />
				{this.props.relatedTopics.map(relatedTopic => (
					<Menu.Item
						name={`Tell me more about a ${relatedTopic.topic}`}
						onClick={() => this.props.showMore(relatedTopic.index)}
					/>
				))}
			</Menu>
		];
	}
}

export default Article;
