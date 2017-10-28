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
		title: "Welcome!",
		text: "I am Tyra the telephone box!",
		interaction: { text: "Hi Tyra!" }
	}
];

const tyraMessage = text => (
	<Message size="massive">
		<Header>{text}</Header>
	</Message>
);
const response = text => (
	<Message size="massive">
		<Header>{text}</Header>
	</Message>
);

const textDelay = 100;
const responseDelay = 500;

class Welcome extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timeElapsed: 0,
			displayTyra: false,
			displayResponse: false
		};
		this.interval = undefined;
		this.tick = this.tick.bind(this);
		this.displayNext = this.displayNext.bind(this);
	}
	displayNext() {
		console.log("display next");
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
		return (
			<Modal basic size="large" open>
				<Grid>
					<Grid.Row>
						<Grid.Column width={3}>
							<Image src={"telebox.svg"} />
						</Grid.Column>
						<Grid.Column width={10}>
							<div>{this.state.timeElapsed}</div>
							{displayTyra && <TyraMessage text="Hello I'm Tyra" />}
							{displayResponse && (
								<Response text="Hi Tyra!" onAccept={this.displayNext} />
							)}
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Modal>
		);
	}
}

export default Welcome;
