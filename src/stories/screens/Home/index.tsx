import React, { Component } from "react";
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
	View,
} from "native-base";
import {RefreshControl} from "react-native";
import moment from "moment";
import {isUndefined} from "lodash";
import styles from "./styles";

export interface Props {
	navigation: any;
	list: any;
	readed: any;
	isLoading: boolean;
	updateList: Function;
	fetchListSuccess: Function;
	setReadedItem: Function;
}

export interface State {
}

class Home extends Component<Props, State> {

	refreshList() {
		this.props.updateList();
	}

	removeItem(id) {
		let data = this.props.list;
		data = data.filter((item) => item.data.id !== id);
		this.props.fetchListSuccess(data);
	}

	navigateToItem(item) {
		this.props.setReadedItem(item.data.id);
		this.props.navigation.navigate("Profile", item);
	}
	renderRow(item) {
		let {thumbnail, author, title, id, created_utc, num_comments} =  item.data;

		if (thumbnail === "default" || thumbnail === "nsfw" || thumbnail === "self") {
			thumbnail = `https://www.gravatar.com/avatar/${id}?d=identicon&f=y`;
		}

		if (thumbnail === 'image') {
			thumbnail = item.data.url;
		}

		let unreadDot = <View style={styles.unreadDot}/>;
		if (!isUndefined(this.props.readed[id])) {
			unreadDot = <View style={styles.readDot}/>;
		}


		return (
			<ListItem
				key={id}
			>
				<Thumbnail square size={80} source={{uri: thumbnail}}/>

				<Body style={styles.listItemBody}>
					<View style={{alignItems: "flex-start", flexDirection: "row", justifyContent: "flex-start", flex: 3}}>
						{unreadDot}
						<Text style={styles.listItemTitle}>{author}</Text>
						<Text note style={styles.listTimeText}>{moment.unix(created_utc).fromNow()}</Text>
					</View>
					<Text numberOfLines={2} ellipsizeMode="tail">{title}</Text>
					<View style={{alignItems: "flex-start", flexDirection: "row", justifyContent: "space-between", flex: 2, marginLeft: 0}}>
						<Button transparent danger small onPress={() => this.removeItem(id)}>
							<Icon name="trash" />
						</Button>
						<Text style={styles.listItemComments} note>{num_comments} Comments</Text>
					</View>
				</Body>

				<Right>
					<Icon name="ios-arrow-forward" onPress={() => this.navigateToItem(item)} />
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
						<Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
							<Icon
								active
								name="menu"
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
