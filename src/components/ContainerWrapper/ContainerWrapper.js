import React from "react";
import "./ContainerWrapper.css";

export default function ContainerWrapper(props) {
    return (
        <div className="pt-3 d-flex w-100 h-100 justify-content-center">
            <div className="col-10 d-flex flex-column">{props.children}</div>
        </div>
    );
}
