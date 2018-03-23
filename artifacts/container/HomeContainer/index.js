import React, { Component } from "react";
import { Spinner } from "native-base";
import { connect } from "react-redux";
import Home from "../../stories/screens/Home";
import { fetchList, updateList } from "./actions";
import { isEmpty } from "lodash";
class HomeContainer extends Component {
    fetchPosts() {
        this.props.fetchList(`https://www.reddit.com/top.json?limit=50`);
    }
    updateList(data) {
        let newData = this.props.data;
        newData.data.data.children = data;
        this.props.updateList(newData);
    }
    componentDidMount() {
        if (isEmpty(this.props.data)) {
            this.fetchPosts();
        }
    }
    render() {
        if (this.props.isLoading) {
            return (React.createElement(Spinner, null));
        }
        let { children } = this.props.data.data.data;
        return React.createElement(Home, { fetchListSuccess: (data) => this.updateList(data), navigation: this.props.navigation, updateList: () => this.fetchPosts(), list: children, isLoading: this.props.isLoading });
    }
}
const mapStateToProps = state => ({
    data: state.homeReducer.data,
    isLoading: state.homeReducer.isLoading,
});
export default connect(mapStateToProps, { fetchList, updateList })(HomeContainer);
//# sourceMappingURL=index.js.map