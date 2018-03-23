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
		return (
			<ListItem
				key={item.data.id}
			>
				<Thumbnail square size={80} source={{uri: item.data.thumbnail}}/>

				<Body>

				<Text>{item.data.author} - <Text note>19 min ago</Text></Text>
				<Text>{item.data.title}</Text>
				</Body>
				<Right>
					<Text note>View</Text>
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
