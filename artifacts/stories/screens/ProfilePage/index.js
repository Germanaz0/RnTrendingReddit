import React, { Component } from "react";
import { Image } from "react-native";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, View } from "native-base";
import moment from "moment";
import styles from "./styles";
import ImageCarousel from 'react-native-image-carousel';
class ProfilePage extends Component {
    constructor() {
        super(...arguments);
        this.state = { images: [] };
    }
    componentDidMount() {
        let param = this.props.navigation.state.params;
        let { preview } = param.data;
        if (preview) {
            let images = preview.images.map((im) => {
                return im.source.url;
            });
            this.setState({ images });
        }
    }
    _renderContent(idx) {
        return (React.createElement(Image, { style: { flex: 1, justifyContent: "center" }, source: { uri: this.state.images[idx] }, resizeMode: "contain" }));
    }
    render() {
        let param = this.props.navigation.state.params;
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
                React.createElement(View, { style: { flex: 1, justifyContent: "center", alignItems: "center" } },
                    React.createElement(ImageCarousel, { ref: (imageCarousel) => {
                            this._imageCarousel = imageCarousel;
                        }, renderContent: (idx) => this._renderContent(idx) }, this.state.images.map((url) => (React.createElement(Image, { key: url, style: styles.image, source: { uri: url, height: 150, width: 100 }, resizeMode: "contain" }))))),
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