import React, { useState } from "react";
import { Button, ButtonGroup, ToggleButton } from "react-bootstrap";
import "./RoomsFilter.css";

function RoomsFilter(props) {
    const [radioValue, setRadioValue] = useState("interested");

    const filters = [
        { name: "All Rooms", value: "all" },
        { name: "Followed", value: "followed" },
        { name: "Interested", value: "interested" },
    ];

    return (
        <div className="d-flex">
            <Button variant="dark" className="me-3">
                <i className="fas fa-bars"></i>
            </Button>
            <ButtonGroup toggle>
                {filters.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        type="radio"
                        variant="dark"
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        </div>
    );
}

export default RoomsFilter;
