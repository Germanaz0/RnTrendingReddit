import * as React from "react";
import { Container, Header, Title, Text, Button, Icon, Left, Body, Right, List, ListItem, Thumbnail, } from "native-base";
import { RefreshControl } from "react-native";
import styles from "./styles";
class Home extends React.Component {
    constructor() {
        super(...arguments);
        this.state = { isRefreshing: false };
        this.renderRow = (item) => {
            let { thumbnail, author, title } = item.data;
            if (thumbnail === "default") {
                thumbnail = "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y";
            }
            return (React.createElement(ListItem, { key: item.data.id },
                React.createElement(Thumbnail, { square: true, size: 80, source: { uri: thumbnail } }),
                React.createElement(Body, { style: { alignItems: "flex-start", flex: 1 } },
                    React.createElement(Text, null,
                        author,
                        " - ",
                        React.createElement(Text, { note: true }, "19 min ago")),
                    React.createElement(Text, null, title)),
                React.createElement(Right, null,
                    React.createElement(Text, { note: true }, "View"))));
        };
    }
    refreshList() {
        this.props.updateList();
    }
    render() {
        let { isLoading } = this.props;
        return (React.createElement(Container, { style: styles.container },
            React.createElement(Header, null,
                React.createElement(Left, null,
                    React.createElement(Button, { transparent: true },
                        React.createElement(Icon, { active: true, name: "menu", onPress: () => this.props.navigation.navigate("DrawerOpen") }))),
                React.createElement(Body, null,
                    React.createElement(Title, null, "Top Reddit")),
                React.createElement(Right, null)),
            React.createElement(List, { style: { flex: 1 }, refreshControl: React.createElement(RefreshControl, { refreshing: isLoading, onRefresh: this.refreshList.bind(this) }), dataArray: this.props.list, renderRow: (item) => this.renderRow(item) })));
    }
}
export default Home;
//# sourceMappingURL=index.js.map