import React, { Component } from "react";
import MusicPlayer from "./components/MusicPlayer";
import Menu from "./components/Menu";
import Article from "./components/Article";
import TireeMap from "./components/TireeMap";
import TyraMessage from "./components/TyraMessage";
import SelectView from "./components/SelectView";
import HiTyra from "./components/HiTyra";
import { Container, Grid, Image } from "semantic-ui-react";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentView: "welcome", //"welcome",
			tyraDone: false,
			newSession: true,
			mapSpecification: {
				center: {
					latitude: "56.469867",
					longitude: "-6.899450"
				},
				zoom: 3
			},
			articleSpecification: {
				id: 1,
				title: "A great blurb",
				topic: "A blurb about blurbiness",
				text: "Text about this blurb",
				relatedTopics: ["sea", "history", "seals"],
				images: [
					{
						src: "exampleImage.jpg",
						description: "some great description",
						tags: ["beach", "seals"]
					}
				]
			}
		};
		this.getTyraMessage = this.getTyraMessage.bind(this);
		this.displayArticle = this.displayArticle.bind(this);
		this.displayMusic = this.displayMusic.bind(this);
		this.displayMap = this.displayMap.bind(this);
		this.showMore = this.showMore.bind(this);
	}

	showMore(moreTag) {
		console.log("show meeee morrrreee", moreTag);
	}
	displayArticle() {
		this.setState({ currentView: "article", tyraDone: false });
	}
	displayMap() {
		this.setState({ currentView: "map", tyraDone: false });
	}
	displayMusic() {
		this.setState({ currentView: "music", tyraDone: false });
	}
	getTyraMessage() {
		switch (this.state.currentView) {
		case "welcome": {
			if (this.state.newSession) {
				return {
					tyraTitle: "Hello!",
					tyraMessage: "I am Tyra the telephone box..."
				};
			}
			return {
				tyraTitle: "Hi there!",
				tyraMessage:
						"Do you want to learn more about Tiree, explore the map, or listen to a local song?"
			};
		}
		case "article": {
			return {
				tyraTitle: this.state.articleSpecification.title,
				tyraMessage: this.state.articleSpecification.topic
			};
		}
		case "music": {
			return {
				tyraMessage: "Let me play you some music from Tiree."
			};
		}
		case "map": {
			return {
				tyraMessage: "Here is the map!"
			};
		}
		case "selectView": {
			return {
				tyraTitle: "What would you like to do?",
				tyraMessage:
						"Learn more about this place, listen to music or view the map..."
			};
		}
		default:
			return { tyraTitle: "", tyraMessage: "no message..." };
		}
	}

	render() {
		const {
			title,
			text,
			relatedTopics,
			images
		} = this.state.articleSpecification;
		const { tyraTitle, tyraMessage } = this.getTyraMessage();
		return (
			<div>
				<Grid centered>
					<Grid.Column width={3}>
						<Image src={"telebox_filled.svg"} />
					</Grid.Column>
					<Grid.Column width={13}>
						<TyraMessage
							title={tyraTitle}
							text={tyraMessage}
							onDone={() => this.setState({ tyraDone: true })}
						/>
						{this.state.tyraDone ? (
							this.state.currentView === "welcome" ? (
								this.state.newSession ? (
									//TODO: tyraDone should be false if the typing is fixed
									<HiTyra
										onAccept={() =>
											this.setState({ newSession: false, tyraDone: false })}
									/>
								) : (
									<SelectView
										onMap={this.displayMap}
										onArticle={this.displayArticle}
										onMusic={this.displayMusic}
									/>
								)
							) : this.state.currentView === "article" ? (
								<Article
									image={images[0]}
									title={title}
									text={text}
									relatedTopics={relatedTopics}
									showMore={this.showMore}
									onBack={() => this.setState({ currentView: "selectView" })}
								/>
							) : this.state.currentView === "map" ? (
								<TireeMap
									onBack={() => this.setState({ currentView: "selectView" })}
								/>
							) : this.state.currentView === "music" ? (
								<MusicPlayer
									onBack={() => this.setState({ currentView: "selectView" })}
								/>
							) : this.state.currentView === "selectView" ? (
								<SelectView
									onMap={this.displayMap}
									onArticle={this.displayArticle}
									onMusic={this.displayMusic}
								/>
							) : null
						) : null}
					</Grid.Column>
				</Grid>
			</div>
		);
	}
}

export default App;
