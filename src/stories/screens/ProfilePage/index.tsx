import React, {Component, ReactElement} from "react";
import {Image} from "react-native";
import {Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, View} from "native-base";
import moment from "moment";
import styles from "./styles";
import ImageCarousel from "react-native-image-carousel";

export interface Props {
    navigation: any;
}

export interface State {
    images: any[];
}


class ProfilePage extends Component<Props, State> {
    state = {images: []};
    _imageCarousel: ImageCarousel;

    componentDidMount() {
        let param = this.props.navigation.state.params;
        let {preview} = param.data;


        if (preview) {
            let images = preview.images.map((im) => {
                return im.source.url;
            });

            this.setState({images});
        }

    }

    _renderContent(idx: number): ReactElement<any> {
        return (
            <Image
                style={{flex: 1, justifyContent: "center"}}
                source={{uri: this.state.images[idx]}}
                resizeMode={"contain"}
            />
        );
    }

    render() {
        let param = this.props.navigation.state.params;
        let {author, title, created_utc} = param.data;

        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="ios-arrow-back"/>
                        </Button>
                    </Left>

                    <Body style={{flex: 3}}>
                    <Title>{author}</Title>
                    </Body>

                    <Right/>
                </Header>

                <Content padder>

                    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <ImageCarousel
                            ref={(imageCarousel: ImageCarousel) => {
                                this._imageCarousel = imageCarousel;
                            }}
                            renderContent={(idx) => this._renderContent(idx)}
                        >
                            {this.state.images.map((url: string): ReactElement<any> => (
                                <Image
                                    key={url}
                                    style={styles.image}
                                    source={{uri: url, height: 150, width: 100}}
                                    resizeMode={"contain"}
                                />
                            ))}
                        </ImageCarousel>
                    </View>
                    <Text>
                        <Text note>[{moment.unix(created_utc).fromNow()}] </Text>
                        {title}</Text>


                </Content>
            </Container>
        );
    }
}

export default ProfilePage;