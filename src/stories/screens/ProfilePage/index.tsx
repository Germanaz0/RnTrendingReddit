import * as React from "react";
import {Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, Footer} from "native-base";
import moment from "moment";
import styles from "./styles";

export interface Props {
	navigation: any;
}
export interface State {}
class ProfilePage extends React.Component<Props, State> {
	render() {
		const param = this.props.navigation.state.params;
		let {author, title, created_utc} = param.data;
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
					<Title>{author}</Title>
					</Body>

					<Right />
				</Header>

				<Content padder>
					<Text>
						<Text note>[{moment.unix(created_utc).fromNow()}] </Text>
						{title}</Text>
				</Content>
			</Container>
		);
	}
}

export default ProfilePage;