import { UPDATE_MAIN_STATE } from "../types/MainTypes";

export const updateMainState = (payload) => {
    return {
        type: UPDATE_MAIN_STATE,
        payload,
    };
};

export const toggleRoomCreateShow = () => (dispatch, getState) => {
    dispatch(
        updateMainState({
            roomCreateModalShow: !getState().mainState.roomCreateModalShow,
        })
    );
};

export const onRoomCreateNameChange = (roomName) => (dispatch, getState) => {
    dispatch(
        updateMainState({
            roomCreateModalName: roomName,
        })
    );
};
