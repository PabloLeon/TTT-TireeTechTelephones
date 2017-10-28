import React, { Component } from "react";
import {
	ComposableMap,
	ZoomableGroup,
	Geographies,
	Geography
} from "react-simple-maps";
import PropTypes from "prop-types";

const wrapperStyles = {
	width: "100%",
	maxWidth: 980,
	margin: "0 auto"
};

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
		return <div>Map</div>;
	}
}

export default TireeMap;
