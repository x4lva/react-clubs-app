import { UPDATE_MAIN_STATE } from "../types/MainTypes";

const initialState = {
    roomsRender: localStorage.getItem("roomsRender") || "rows",
    roomsFilter: localStorage.getItem("roomsFilter") || "all",
    roomCreateModalShow: false,
    roomCreateModalName: "",
    roomCreateModalType: "public",
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MAIN_STATE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default mainReducer;
