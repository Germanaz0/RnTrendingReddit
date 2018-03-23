const initialState = {
	list: {},
	isLoading: true,
};

export default function(state = initialState, action) {
	switch(action.type) {
		case "FETCH_LIST_SUCCESS":
			let data = Object.assign({}, action.data);
			return {...state, data};
		case "LIST_IS_LOADING":
			return {...state, isLoading: action.isLoading};
		default:
			return state;
	}
}
