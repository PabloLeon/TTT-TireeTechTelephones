import React, { Component } from "react";
import { Menu, Image, Segment, Container } from "semantic-ui-react";
import PropTypes from "prop-types";

//marks: points.topojson
// - name, -place, -other_tags => "natural"=> "peak", "historic" => "ruins", "amenity"=>"bicycle_rental","tourism"=>"hostel",
//"historic"=>"archaeological_site","megalith_type"=>"menhir","site_type"=>"megalith"
//"historic"=>"archaeological_site","site_type"=>"tumulus"

//lines???
//filter: keep? "route"=>"ferry"
//highway: != null
//"natural"=>"coastline"
//waterway stream

class TireeMap extends React.Component {
	render() {
		return [
			<Segment secondary>
				<Image src="map.svg" size="medium" />
			</Segment>,
			<Menu color={"red"} inverted as={Container}>
				<Menu.Item
					floated="left"
					name="Back to Menu"
					onClick={this.props.onBack}
				/>
			</Menu>
		];
	}
}

export default TireeMap;
