import React, { Component } from "react";
import MusicPlayer from "./components/MusicPlayer";
import Menu from "./components/Menu";
import Article from "./components/Article";
import TireeMap from "./components/TireeMap";
import TyraMessage from "./components/TyraMessage";
import SelectView from "./components/SelectView";
import HiTyra from "./components/HiTyra";
import { Container, Grid, Image } from "semantic-ui-react";

const BACKEND_IP = "192.168.112.146:5000/post/88888";
const testData = "testData.json";
//Janie IP: 192.168.112.146
// :5000/posts/88888

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
			mainArticleSpecification: {
				title: "A great blurb",
				topic: "A blurb about blurbiness",
				text: "Text about this blurb",
				images: [
					{
						src: "exampleImage.jpg",
						description: "some great description",
						tags: ["beach", "seals"]
					}
				]
			},
			relatedArticles: [
				{
					title: "Seals are great",
					topic: "Seals",
					text: "Text about seals",
					images: [
						{
							src: "exampleImage.jpg",
							description: "An impressive seal",
							tags: ["beach", "seals"]
						}
					]
				},
				{
					title: "The sea is great",
					topic: "Sea",
					text: "Text about the sea",
					images: [
						{
							src: "exampleImage.jpg",
							description: "The impressive sea",
							tags: ["beach", "sea"]
						}
					]
				},
				{
					title: "History is great",
					topic: "History",
					text: "Text about history",
					images: [
						{
							src: "exampleImage.jpg",
							description: "The impressive history",
							tags: ["beach", "history"]
						}
					]
				}
			]
		};
		this.getTyraMessage = this.getTyraMessage.bind(this);
		this.displayArticle = this.displayArticle.bind(this);
		this.displayMusic = this.displayMusic.bind(this);
		this.displayMap = this.displayMap.bind(this);
		this.showMore = this.showMore.bind(this);
		this.getData = this.getData.bind(this);
	}

	getData() {
		fetch(testData)
			.then(function(response) {
				console.log("got something");
				return response.json();
			})
			.then(data => {
				//console.log(data["main"]);
				console.log("image", data["main"].frasan_web_image_str);
				this.setState({
					mainArticleSpecification: {
						title: data["main"].frasan_township_str[0],
						text: data["main"].frasan_description,
						topic: data["main"].frasan_scale_str[0],
						images: [
							{
								src: "http:" + data["main"].frasan_web_image_str[0].slice(4)
							}
						]
					},
					relatedArticles: [
						{
							title: data["related1"].frasan_township_str[0],
							text: data["related1"].frasan_description,
							topic: data["related1"].frasan_scale_str[0],
							images: [
								{
									src:
										"http:" + data["related1"].frasan_web_image_str[0].slice(4)
								}
							]
						},
						{
							title: data["related2"].frasan_township_str[0],
							text: data["related2"].frasan_description,
							topic: data["related2"].frasan_scale_str[0],
							images: [
								{
									src:
										"http:" + data["related2"].frasan_web_image_str[0].slice(4)
								}
							]
						},
						{
							title: data["related3"].frasan_township_str[0],
							text: data["related3"].frasan_description,
							topic: data["related3"].frasan_scale_str[0],
							images: [
								{
									src:
										"http:" + data["related3"].frasan_web_image_str[0].slice(4)
								}
							]
						}
					]
				});
			})
			.catch(function(error) {
				console.log("got an error", error);
			});
	}
	componentDidMount() {
		console.log("Im moooooooooooooooooooooooooooooooooounted");
		//initially load 4 articles from Janie

		//Janie IP: 192.168.112.146
		// :5000/posts/88888
		//BACKEND_IP || testData
		this.getData();
	}
	showMore(moreIdx) {
		console.log("show meeee morrrreee", moreIdx);
		this.setState({
			mainArticleSpecification: this.state.relatedArticles[moreIdx]
		});
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
				tyraTitle:
						"Here is a cool fact about " +
						this.state.mainArticleSpecification.title,
				tyraMessage:
						"This is a great " + this.state.mainArticleSpecification.topic
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
		const { title, text, images, topic } = this.state.mainArticleSpecification;
		const relatedTopics = this.state.relatedArticles.map((item, index) => ({
			index: index,
			topic: item.topic
		}));
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
