import React from "react";
import { Image as ImageComponent, Label, Item } from "semantic-ui-react";

class Blurb extends React.Component {
	render() {
		const { src, descripition } = this.props.image;
		return (
			<Item.Group>
				<Item>
					<Item.Image size="large" src={src} descripition={descripition} />
					<Item.Content>
						<Item.Header as="a">{this.props.title}</Item.Header>
						<Item.Description>{this.props.text}</Item.Description>
						<Item.Extra>
							<Label tag>New</Label>
							<Label color="red" tag>
								Upcoming
							</Label>
							<Label color="teal" tag>
								Featured
							</Label>
						</Item.Extra>
					</Item.Content>
				</Item>
			</Item.Group>
		);
	}
}

export default Blurb;
