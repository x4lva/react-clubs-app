import React, { useCallback } from "react";
import { Button } from "react-bootstrap";
import RoomsFilter from "../RoomsFilter/RoomsFilter";
import { toggleRoomCreateShow } from "../../redux/actions/MainActions";
import { useDispatch } from "react-redux";

const HomeControls = () => {
    const dispatch = useDispatch();
    const toggleRoomCreate = useCallback(() => {
        dispatch(toggleRoomCreateShow());
    }, []);

    return (
        <div className="d-flex justify-content-between mb-2">
            <Button onClick={toggleRoomCreate} variant="dark">
                Create Room
            </Button>
            <RoomsFilter />
        </div>
    );
};

export default HomeControls;
