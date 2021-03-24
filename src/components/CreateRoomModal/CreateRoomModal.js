import React, { useCallback } from "react";
import { Button, Modal, Toast } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
    toggleRoomCreateShow,
    onRoomCreateNameChange,
} from "../../redux/actions/MainActions";
import TextareaAutosize from "react-textarea-autosize";
import { v4 as uuidv4 } from "uuid";
import firebase from "../../utils/FirebaseStore";

import "./CreateRoomModal.css";
import { withRouter } from "react-router";
import { ToastsStore } from "react-toasts";

function CreateRoomModal(props) {
    const dispatch = useDispatch();

    const { roomCreateModalShow, roomCreateModalName } = useSelector(
        (state) => state.mainState
    );
    const toggleRoomCreate = useCallback(() => {
        dispatch(toggleRoomCreateShow());
    }, []);
    const roomNameChangeHandler = useCallback((e) => {
        dispatch(onRoomCreateNameChange(e.target.value));
    }, []);

    const createRoomHandler = (path) => {
        const roomId = uuidv4();
        if (roomCreateModalName === "") {
            ToastsStore.error("Room name can not be empty");
        } else {
            firebase
                .database()
                .ref("rooms")
                .push()
                .set({
                    id: roomId,
                    name: roomCreateModalName,
                    users: { ["x4lva"]: "x4lva" },
                })
                .then((r) => {});
            toggleRoomCreate();
            props.history.push(`/room/${roomId}`);
        }
    };

    return (
        <Modal
            className="create-room-modal p-3"
            show={roomCreateModalShow}
            onHide={toggleRoomCreate}
        >
            <div className="p-3">
                <input
                    className="form-control mb-2"
                    placeholder="Room name"
                    onChange={roomNameChangeHandler}
                    value={roomCreateModalName}
                    type="text"
                />
                <TextareaAutosize
                    className="form-control mb-2"
                    minRows={2}
                    maxRows={10}
                    placeholder="Room description"
                />
                <select className="form-select mb-2">
                    <option selected value="1">
                        Public
                    </option>
                    <option value="2">Private</option>
                </select>
                <Button
                    onClick={createRoomHandler}
                    className="w-100"
                    type="submit"
                    variant="dark"
                >
                    Create
                </Button>
            </div>
        </Modal>
    );
}

export default withRouter(CreateRoomModal);
