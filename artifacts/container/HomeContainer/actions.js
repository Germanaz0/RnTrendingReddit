var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
export function listIsLoading(bool) {
    return {
        type: "LIST_IS_LOADING",
        isLoading: bool,
    };
}
export function fetchListSuccess(data) {
    return {
        type: "FETCH_LIST_SUCCESS",
        data,
    };
}
export function readedItem(id) {
    return { type: "READED_ITEM", id: id };
}
export function setReadedItem(id) {
    return function (dispatch) {
        dispatch(readedItem(id));
    };
}
export function fetchList(url) {
    return (dispatch) => __awaiter(this, void 0, void 0, function* () {
        // dispatch(listIsLoading(true));
        let list = yield axios.get(url);
        dispatch(fetchListSuccess(list));
        dispatch(listIsLoading(false));
    });
}
export function updateList(list) {
    return function (dispatch) {
        dispatch(fetchListSuccess(list));
    };
}
//# sourceMappingURL=actions.js.map