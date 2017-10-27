import React, { Component } from "react";
import { Container, Header, Image } from "semantic-ui-react";
//import songexample from "songexample.mp3";

class MusicPlayer extends Component {
	state = {
		title: "Mairi MacLean singing Se Tiriodh an t-eilean",
		description: "",
		source: "songexample.mp3",
		artwork: "exampleImage.jpg",
		currentTime: 0
	};
	render() {
		return (
			<Container>
				<Image src={this.state.artwork} fluid />
				<Header>{this.state.title}</Header>
				<audio src={"songexample.mp3"} autoPlay loop />
			</Container>
		);
	}
}

export default MusicPlayer;
