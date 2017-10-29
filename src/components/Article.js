import React from "react";
import { Image, Label, Item, Segment, Button } from "semantic-ui-react";

class Article extends React.Component {
	render() {
		const { src, descripition } = this.props.image;
		//this.props.showMore

		return [
			<Segment secondary style={{ maxHeight: 400 }}>
				<Item.Group>
					<Item>
						<Item.Image size="large" src={src} />
						<Item.Content>
							<Item.Description>{this.props.text}</Item.Description>
							<p>
								I write the best placeholder text, and I'm the biggest developer
								on the web by far... While that's mock-ups and this is politics,
								are they really so different? You’re disgusting. All of the
								words in Lorem Ipsum have flirted with me - consciously or
								unconsciously. That's to be expected.
							</p>
							<p>
								I write the best placeholder text, and I'm the biggest developer
								on the web by far... While that's mock-ups and this is politics,
								are they really so different? You’re disgusting. All of the
								words in Lorem Ipsum have flirted with me - consciously or
								unconsciously. That's to be expected.
							</p>
						</Item.Content>
					</Item>
				</Item.Group>
			</Segment>,
			<Segment>
				{this.props.relatedTopics.map(relatedTopic => (
					<Button
						basic
						color="red"
						content={relatedTopic}
						onClick={this.props.showMore(relatedTopic)}
					/>
				))}
			</Segment>
		];
	}
}

export default Article;
