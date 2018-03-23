import * as React from "react";
import { Container, Header, Title, Text, Button, Icon, Left, Body, Right, List, ListItem, Thumbnail, View, } from "native-base";
import { RefreshControl } from "react-native";
import moment from "moment";
import styles from "./styles";
class Home extends React.Component {
    constructor() {
        super(...arguments);
        this.state = { isRefreshing: false };
        this.renderRow = (item) => {
            let { thumbnail, author, title, id, created_utc, num_comments } = item.data;
            if (thumbnail === "default" || thumbnail === "nsfw" || thumbnail === "self") {
                thumbnail = `https://www.gravatar.com/avatar/${id}?d=identicon&f=y`;
            }
            return (React.createElement(ListItem, { key: id },
                React.createElement(Thumbnail, { square: true, size: 80, source: { uri: thumbnail } }),
                React.createElement(Body, { style: styles.listItemBody },
                    React.createElement(View, { style: { alignItems: "flex-start", flexDirection: "row", justifyContent: "flex-start", flex: 1 } },
                        React.createElement(View, { style: styles.unreadDot }),
                        React.createElement(Text, { style: styles.listItemTitle }, author),
                        React.createElement(Text, { note: true, style: styles.listTimeText }, moment.unix(created_utc).fromNow())),
                    React.createElement(Text, { numberOfLines: 2, ellipsizeMode: "tail" }, title),
                    React.createElement(Text, { style: styles.listItemComments, note: true },
                        num_comments,
                        " Comments")),
                React.createElement(Right, null,
                    React.createElement(Icon, { name: "ios-arrow-forward" }))));
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