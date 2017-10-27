import React, { Component } from "react";
import logo from "./logo.svg";
import MusicPlayer from "./components/MusicPlayer";
import Menu from "./components/Menu";
import Blurb from "./components/Blurb";
import { Container } from "semantic-ui-react";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			width: 0,
			height: 0,
			currentView: "article",
			mapSpecification: {
				center: {
					latitude: "56.469867",
					longitude: "-6.899450"
				},
				zoom: 3
			},
			articleSpecification: {
				id: 1,
				topic: "",
				title: "A great blurb",
				text: "Text about this blurb",
				relatedTopics: "",
				images: [
					{
						src: "exampleImage.jpg",
						description: "some great description",
						tags: ["beach", "seals"]
					}
				]
			}
		};
	}
	componentDidMount() {
		this.setState({
			width: window.innerWidth,
			height: window.innerHeight
		});
	}

	render() {
		const {
			topic,
			title,
			text,
			relatedTopics,
			images
		} = this.state.articleSpecification;
		return (
			<div
				style={{
					width: this.state.width,
					minHeight: this.state.height
				}}
			>
				<Menu>
					{this.state.currentView === "article" ? (
						<Blurb image={images[0]} title={title} text={text} />
					) : (
						<Map />
					)}
				</Menu>
			</div>
		);
	}
}

export default App;
