import React, { Component } from "react";
import Typist from "react-typist";
import { Segment, Header, Container } from "semantic-ui-react";
import "./Typist.css";

const TyraMessage = ({ title, text, onDone }) => (
	<Segment raised inverted color="red">
		{!!title && <Header>{title}</Header>}
		<Container>
			<Typist avgTypingDelay={50} key={`${text}`} onTypingDone={onDone}>
				{text}
			</Typist>
		</Container>
	</Segment>
);

export default TyraMessage;
