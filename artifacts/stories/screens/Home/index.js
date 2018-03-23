import React, { Component } from "react";
import { Container, Header, Title, Text, Button, Icon, Left, Body, Right, List, ListItem, Thumbnail, View, } from "native-base";
import { RefreshControl } from "react-native";
import moment from "moment";
import { isUndefined } from "lodash";
import styles from "./styles";
class Home extends Component {
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
        let { thumbnail, author, title, id, created_utc, num_comments } = item.data;
        if (thumbnail === "default" || thumbnail === "nsfw" || thumbnail === "self") {
            thumbnail = `https://www.gravatar.com/avatar/${id}?d=identicon&f=y`;
        }
        if (thumbnail === 'image') {
            thumbnail = item.data.url;
        }
        let unreadDot = React.createElement(View, { style: styles.unreadDot });
        if (!isUndefined(this.props.readed[id])) {
            unreadDot = React.createElement(View, { style: styles.readDot });
        }
        return (React.createElement(ListItem, { key: id },
            React.createElement(Thumbnail, { square: true, size: 80, source: { uri: thumbnail } }),
            React.createElement(Body, { style: styles.listItemBody },
                React.createElement(View, { style: { alignItems: "flex-start", flexDirection: "row", justifyContent: "flex-start", flex: 3 } },
                    unreadDot,
                    React.createElement(Text, { style: styles.listItemTitle }, author),
                    React.createElement(Text, { note: true, style: styles.listTimeText }, moment.unix(created_utc).fromNow())),
                React.createElement(Text, { numberOfLines: 2, ellipsizeMode: "tail" }, title),
                React.createElement(View, { style: { alignItems: "flex-start", flexDirection: "row", justifyContent: "space-between", flex: 2, marginLeft: 0 } },
                    React.createElement(Button, { transparent: true, danger: true, small: true, onPress: () => this.removeItem(id) },
                        React.createElement(Icon, { name: "trash" })),
                    React.createElement(Text, { style: styles.listItemComments, note: true },
                        num_comments,
                        " Comments"))),
            React.createElement(Right, null,
                React.createElement(Icon, { name: "ios-arrow-forward", onPress: () => this.navigateToItem(item) }))));
    }
    render() {
        let { isLoading } = this.props;
        return (React.createElement(Container, { style: styles.container },
            React.createElement(Header, null,
                React.createElement(Left, null,
                    React.createElement(Button, { transparent: true, onPress: () => this.props.navigation.navigate("DrawerOpen") },
                        React.createElement(Icon, { active: true, name: "menu" }))),
                React.createElement(Body, null,
                    React.createElement(Title, null, "Top Reddit")),
                React.createElement(Right, null)),
            React.createElement(List, { style: { flex: 1 }, refreshControl: React.createElement(RefreshControl, { refreshing: isLoading, onRefresh: this.refreshList.bind(this) }), dataArray: this.props.list, renderRow: (item) => this.renderRow(item) })));
    }
}
export default Home;
//# sourceMappingURL=index.js.map