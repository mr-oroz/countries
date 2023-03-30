import { service } from "../http/service";
import { countryAllAction, itemDetailAction } from "./action";

export const getRequestCountryAll = () => {
    return async (dispatch) => {
        try {
            const response = await service.getCountryAll();
            dispatch(countryAllAction(response.data))
        } catch (e) {
            console.log(e)
        }
    }
}

export const getRequestSearchName = (name) => {
    return async (dispatch) => {
        try {
            const response = await service.getCountrySearch(name);
            dispatch(itemDetailAction(response.data, null))
        } catch (e) {
            dispatch(itemDetailAction([], e.response.data.message))
        }
    }
}