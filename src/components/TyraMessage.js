import React, { Component } from "react";
import { Message, Header, Container } from "semantic-ui-react";

const TyraMessage = ({ title, text }) => (
	<Message>
		{!!title && <Header>{title}</Header>}
		{!!text && <Container>{text}</Container>}
	</Message>
);

export default TyraMessage;
