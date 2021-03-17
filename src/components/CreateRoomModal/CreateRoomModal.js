import React from "react";
import { Modal } from "react-bootstrap";

function CreateRoomModal(props) {
    return (
        <Modal
            className="p-3"
            show={props.show}
            onHide={() => props.onHide}
        ></Modal>
    );
}

export default CreateRoomModal;
