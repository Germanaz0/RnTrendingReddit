const initialState = {
	list: {},
	isLoading: true,
	readed: {},
};

export default function(state = initialState, action) {
	switch(action.type) {
		case "FETCH_LIST_SUCCESS":
			let data = Object.assign({}, action.data);
			return {...state, data};
		case "LIST_IS_LOADING":
			return {...state, isLoading: action.isLoading};
		case "READED_ITEM":
			let readed = state.readed;
			readed[action.id] = true;
			return {...state, readed: Object.assign({}, readed)};
		default:
			return state;
	}
}
