import React from "react";
import {
	Grid,
	Image,
	Message,
	Container,
	Header,
	Modal
} from "semantic-ui-react";
import TyraMessage from "./TyraMessage";
import Response from "./Response";
import SelectView from "./SelectView";

const exampleTextBlobs = [
	{
		tyra: {
			title: "Hello!",
			text: "I am Tyra the telephone box!"
		},
		response: {
			text: "Hi Tyra!"
		}
	},
	{
		tyra: {
			title: "Hi there!",
			text:
				"Do you want to know more about this place or listen to a song from here?"
		},
		response: {
			options: [
				{
					text: "Yes sure!",
					action: "SHOW_ITEM",
					src: "articlesmall.svg"
				},
				{
					text: "Just show me the map!",
					action: "SHOW_Map",
					src: "map.svg"
				},
				{
					text: "I want to listen to a song!",
					action: "PLAY_SONG",
					src: "phonemusic.svg"
				}
			]
		}
	}
];

class Dialog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentBlobIndex: 0,
			displayResponse: false
		};
		this.displayNext = this.displayNext.bind(this);
		this.updateResponseStatus = this.updateResponseStatus.bind(this);
	}
	selectOption(t) {
		console.log("select option", t);
	}
	displayNext() {
		this.setState({
			currentBlobIndex: this.state.currentBlobIndex + 1,
			displayResponse: false
		});
	}
	updateResponseStatus() {
		this.setState({
			displayResponse: !this.state.displayResponse
		});
	}
	//TODO: update to next block broke => maybe typist reset not done?
	render() {
		const canDisplayResponse = this.state.displayResponse;
		const { tyra, response } = exampleTextBlobs[
			this.state.currentBlobIndex + 1
		];
		const hasOptions = !!response.options;

		//console.log("log", canDisplayResponse, hasOptions, response);
		return (
			<Modal basic size="large" open>
				<Grid>
					<Grid.Row>
						<Grid.Column width={3}>
							<Image src={"telebox_filled.svg"} />
						</Grid.Column>
						<Grid.Column width={10}>
							<TyraMessage
								text={tyra.text}
								title={tyra.title}
								onDone={this.updateResponseStatus}
							/>
							{canDisplayResponse ? (
								hasOptions ? (
									<SelectView {...response} selectOption={this.selectOption} />
								) : (
									<Response {...response} onAccept={this.displayNext} />
								)
							) : null}
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Modal>
		);
	}
}

export default Dialog;
