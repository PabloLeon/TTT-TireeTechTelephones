import React, { Component } from "react";
import {
	Container,
	Header,
	Segment,
	Image,
	Dropdown,
	Divider,
	Menu,
	Grid
} from "semantic-ui-react";
import ReactAudioPlayer from "react-audio-player";

const songs = [
	{
		src: "song2.mp3",
		artist: {
			name: "Effie MacDonald",
			song: "S e Tiriodh an t-eilean"
		},
		description:
			"Mairi MacLean of Ruaig was recorded by Co-Chomunn Dualchas Thiriodh singing S e Tiriodh an t-eilean (Tiree is the island), an unpublished song probably written by Neil MacLaine, a nephew of John MacLean, Bard Tighearna Cholla, and a bard himself. While at school in Tiree, Mairi competed in several Mods. She won first prize singing this song at the Mod in Inverness in 1972. That same year she came third in the silver medal competition for singing a set Gaelic song. Mairi has worked as a district nurse in Tiree for eighteen years. Before returning to Tiree she worked as a district nurse in Oban and Glasgow."
	},
	{
		src: "song3.mp3",
		artist: {
			name: "Ishbel MacLean",
			song: "Ma shiubbhlais sibh tuath"
		},
		description:
			"Ishbel MacLean née MacDonald of Kenovay was Tiree’s District Nurse from 1955 to 1962. She did her general nurse training at Glasgow Royal Infirmary, and midwifery at Raigmore Hospital in Inverness and Lennox Castle in Glasgow.\n\nShe married a Lewis man, Angus MacLean, and lived for twenty years in Canada where her husband worked as a teacher. While in Toronto she was given tuition by a professional opera singer. She was recorded by Co-Chomunn Dualchas Thiriodh singing the Tiree song ‘Ma shiubhlais sibh tuath’ (If you travel north).After their return from Canada, Ishbel and her husband lived in Glasgow and Helensburgh but now reside permanently in her family home in Kenovay."
	},
	{
		src: "song1.mp3",
		artist: {
			name: "Effie MacDonald",
			song: "Am falbh thu leam, a rìbhinn òg"
		},
		description:
			"Effie MacDonald of Middleton sings ‘Am falbh thu leam, a rìbhinn òg’, known colloquially as the ‘Tiree Love Song’. It was written by Alexander Sinclair (Alasdair Nèill Òig), a wine and spirit merchant in Glasgow.\n\nIn the song, he asks a young maiden to come with him over the sea where she will see everything she could desire in the isle of the west that once was his home: geese and white swans, views over the ocean to the neighbouring isles, the green meadows and the tranquillity of St Patrick’s chapel.\n\nHe tells her of the songbirds, the bumble bees and the blaze on the cattle, the cormorants and ducks, the marram grass growing on the dunes and the fragrance of the machair flowers, all to be found on his favourite part of Argyll – the green island of Tiree."
	}
];
const getSong = (idx, songList = songs) => {
	if (idx >= 0 && idx < songList.length) {
		return songList[idx];
	}
	return false;
};
class MusicPlayer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentSongIdx: undefined
		};
	}
	render() {
		const currentSong = getSong(this.state.currentSongIdx);
		const currentSrc = currentSong ? currentSong.src : null;

		return [
			<Grid as={Segment} secondary columns={2}>
				<Grid.Column as={Container} width={10}>
					<Dropdown
						button
						compact
						className="icon"
						icon="search"
						placeholder="Select a Song!"
						options={songs.map((item, idx) => (
							<Dropdown.Item
								simple
								key={item.src}
								label={`${item.artist.name} sings ${item.artist.song}`}
								onClick={() => this.setState({ currentSongIdx: idx })}
							/>
						))}
					/>
					<Divider />
					{currentSong && <p>{currentSong.description}</p>}
				</Grid.Column>
				<Grid.Column as={Container} width={6}>
					<Image src="musicplayer2.svg" />
					{currentSong && (
						<ReactAudioPlayer src={currentSrc} controls autoPlay />
					)}
				</Grid.Column>
			</Grid>,
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

export default MusicPlayer;
