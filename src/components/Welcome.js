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
			text:
				"Do you want to know more about this place or listen to a song from here?"
		},
		response: {
			options: [
				{
					text: "Yes sure!",
					action: "SHOW_ITEM"
				},
				{
					text: "Just show me the map!",
					action: "SHOW_Map"
				},
				{
					text: "I want to listen to a song!",
					action: "PLAY_SONG"
				}
			]
		}
	}
];

const textDelay = 100;
const responseDelay = 500;

class Welcome extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentBlobIndex: 0,
			timeElapsed: 0,
			displayTyra: false,
			displayResponse: false
		};
		this.interval = undefined;
		this.tick = this.tick.bind(this);
		this.displayNext = this.displayNext.bind(this);
	}
	displayNext() {
		this.setState({
			currentBlobIndex: this.state.currentBlobIndex + 1,
			timeElapsed: 0,
			displayTyra: false,
			displayResponse: false
		});

		this.interval = setInterval(this.tick, 1);
	}
	tick() {
		if (this.state.timeElapsed > responseDelay) {
			this.setState({
				displayResponse: true,
				displayTyra: true
			});

			clearInterval(this.interval);
		} else if (this.state.timeElapsed > textDelay) {
			this.setState({
				displayTyra: true,
				timeElapsed: this.state.timeElapsed + 1
			});
		}
		this.setState({
			timeElapsed: this.state.timeElapsed + 1
		});
	}
	componentDidMount() {
		this.interval = setInterval(this.tick, 1);
	}
	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		const { displayTyra, displayResponse } = this.state;
		const { tyra, response } = exampleTextBlobs[this.state.currentBlobIndex];
		return (
			<Modal basic size="large" open>
				<Grid>
					<Grid.Row>
						<Grid.Column width={3}>
							<Image src={"telebox.svg"} />
						</Grid.Column>
						<Grid.Column width={10}>
							<div>{this.state.timeElapsed}</div>
							{displayTyra && <TyraMessage {...tyra} />}
							{displayResponse && (
								<Response {...response} onAccept={this.displayNext} />
							)}
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Modal>
		);
	}
}

export default Welcome;
