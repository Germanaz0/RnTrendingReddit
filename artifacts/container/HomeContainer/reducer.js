const initialState = {
    list: {},
    isLoading: true,
};
export default function (state = initialState, action) {
    if (action.type === "FETCH_LIST_SUCCESS") {
        return Object.assign({}, state, { data: action.data });
    }
    if (action.type === "LIST_IS_LOADING") {
        return Object.assign({}, state, { isLoading: action.isLoading });
    }
    return state;
}
//# sourceMappingURL=reducer.js.map