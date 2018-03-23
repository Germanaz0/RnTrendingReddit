import React, {Component} from "react";
import ProfilePage from "../../stories/screens/ProfilePage";

export interface Props {
	navigation: any;
}

export interface State {}
class ProfileContainer extends Component<Props, State> {
	render() {
		return <ProfilePage navigation={this.props.navigation} />;
	}
}

export default ProfileContainer;