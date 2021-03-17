import React from "react";
import "./FixedButton.scss";

export default function FixedButton(props) {
    const position = props.position;
    let fixedButtonClassName = "fixed-button btn btn-dark ";

    switch (position) {
        case "TOP_LEFT":
            fixedButtonClassName += "button-fixed-top-left";
            break;
        case "BOTTOM_LEFT":
            fixedButtonClassName += "button-fixed-bottom-left";
            break;
        case "BOTTOM_RIGHT":
            fixedButtonClassName += "button-fixed-bottom-right";
            break;
        case "TOP_RIGHT":
            fixedButtonClassName += "button-fixed-top-right";
            break;
    }

    return (
        <div {...props} className={fixedButtonClassName}>
            {props.children}
        </div>
    );
}
