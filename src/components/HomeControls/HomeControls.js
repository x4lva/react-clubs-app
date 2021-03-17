import React from "react";
import { Button } from "react-bootstrap";
import RoomsFilter from "../RoomsFilter/RoomsFilter";

const HomeControls = (props) => {
    return (
        <div className="d-flex justify-content-between mb-2">
            <Button variant="dark">Create Room</Button>
            <RoomsFilter />
        </div>
    );
};

export default HomeControls;
