import React, {Component} from "react";
import {Spinner} from "native-base";
import { connect } from "react-redux";
import Home from "../../stories/screens/Home";
import { fetchList } from "./actions";
export interface Props {
	navigation: any;
	fetchList: Function;
	data: any;
	isLoading: boolean;
}
export interface State {}
class HomeContainer extends Component<Props, State> {
	fetchPosts() {
		this.props.fetchList(`https://www.reddit.com/top.json`);
	}

	componentDidMount() {
		this.fetchPosts();
	}

	render() {
		if (this.props.isLoading) {
			return (<Spinner />);
		}

		let {children} = this.props.data.data.data;
		return <Home navigation={this.props.navigation} list={children} />;
	}
}

const mapStateToProps = state => ({
	data: state.homeReducer.data,
	isLoading: state.homeReducer.isLoading,
});

export default connect(mapStateToProps, {fetchList})(HomeContainer);
