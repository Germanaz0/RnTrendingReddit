import React, { Component } from "react";
import ProfilePage from "../../stories/screens/ProfilePage";
class ProfileContainer extends Component {
    render() {
        return React.createElement(ProfilePage, { navigation: this.props.navigation });
    }
}
export default ProfileContainer;
//# sourceMappingURL=index.js.map