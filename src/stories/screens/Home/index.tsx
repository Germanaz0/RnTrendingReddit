import * as React from "react";
import {
	Container,
	Header,
	Title,
	Text,
	Button,
	Icon,
	Left,
	Body,
	Right,
	List,
	ListItem,
	Thumbnail,
} from "native-base";
import {RefreshControl} from "react-native";
import moment from "moment";

import styles from "./styles";

export interface Props {
	navigation: any;
	list: any;
	isLoading: boolean;
	updateList: Function;
}

export interface State {

}

class Home extends React.Component<Props, State> {
	state = {isRefreshing: false};

	refreshList() {
		this.props.updateList();
	}

	renderRow = (item) => {
		let {thumbnail, author, title, id, created_utc} =  item.data;

		if (thumbnail === "default" || thumbnail === "nsfw" || thumbnail === "self") {
			thumbnail = `https://www.gravatar.com/avatar/${id}?d=identicon&f=y`;
		}

		return (
			<ListItem
				key={id}
			>
				<Thumbnail square size={80} source={{uri: thumbnail}}/>

				<Body style={{alignItems: "flex-start", flex: 1}}>

				<Text style={{fontWeight: "bold"}}>{author} <Text style={{fontWeight: "normal"}} note> - {moment.unix(created_utc).fromNow()}</Text></Text>
				<Text numberOfLines={2} ellipsizeMode="tail">{title}</Text>
				</Body>
				<Right>
					<Icon name="ios-arrow-forward" />
				</Right>
			</ListItem>
		);
	}

	render() {
		let {isLoading } = this.props;
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent>
							<Icon
								active
								name="menu"
								onPress={() => this.props.navigation.navigate("DrawerOpen")}
							/>
						</Button>
					</Left>
					<Body>
					<Title>Top Reddit</Title>
					</Body>
					<Right/>
				</Header>

					<List style={{flex: 1}} refreshControl={
						<RefreshControl refreshing={isLoading}
														onRefresh={this.refreshList.bind(this)}
						/>
					}

								dataArray={this.props.list}
								renderRow={(item) => this.renderRow(item)}
					>
					</List>

			</Container>
		);
	}
}

export default Home;
