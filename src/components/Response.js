import React, { Component } from "react";
import { Message, Header, Container, Button } from "semantic-ui-react";

const Response = ({ title, text, onAccept }) => (
	<Message>
		{!!title && <Header>{title}</Header>}
		<Container>{text}</Container>
		<Button
			content="Send"
			icon="right arrow"
			labelPosition="right"
			onClick={onAccept}
		/>
	</Message>
);
export default Response;
