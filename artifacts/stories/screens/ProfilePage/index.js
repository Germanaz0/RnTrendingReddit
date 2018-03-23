import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";
import moment from "moment";
import styles from "./styles";
class ProfilePage extends React.Component {
    render() {
        const param = this.props.navigation.state.params;
        let { author, title, created_utc } = param.data;
        return (React.createElement(Container, { style: styles.container },
            React.createElement(Header, null,
                React.createElement(Left, null,
                    React.createElement(Button, { transparent: true, onPress: () => this.props.navigation.goBack() },
                        React.createElement(Icon, { name: "ios-arrow-back" }))),
                React.createElement(Body, { style: { flex: 3 } },
                    React.createElement(Title, null, author)),
                React.createElement(Right, null)),
            React.createElement(Content, { padder: true },
                React.createElement(Text, null,
                    React.createElement(Text, { note: true },
                        "[",
                        moment.unix(created_utc).fromNow(),
                        "] "),
                    title))));
    }
}
export default ProfilePage;
//# sourceMappingURL=index.js.map