const initialState = {
    list: {},
    isLoading: true,
};
export default function (state = initialState, action) {
    switch (action.type) {
        case "FETCH_LIST_SUCCESS":
            let data = Object.assign({}, action.data);
            return Object.assign({}, state, { data });
        case "LIST_IS_LOADING":
            return Object.assign({}, state, { isLoading: action.isLoading });
        default:
            return state;
    }
}
//# sourceMappingURL=reducer.js.map