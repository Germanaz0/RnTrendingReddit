import axios from "axios";

export function listIsLoading(bool: boolean) {
	return {
		type: "LIST_IS_LOADING",
		isLoading: bool,
	};
}
export function fetchListSuccess(data: Object) {
	return {
		type: "FETCH_LIST_SUCCESS",
		data,
	};
}
export function fetchList(url) {
	return async dispatch => {
		// dispatch(listIsLoading(true));
		let list = await axios.get(url);
		dispatch(fetchListSuccess(list));
		dispatch(listIsLoading(false));
	};
}

export function updateList(list) {
	return function(dispatch) {
		dispatch(fetchListSuccess(list));
	};
}
