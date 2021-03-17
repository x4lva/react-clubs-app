import React from "react";
import "./RoomItem.css";

export default function RoomItem(props) {
    const { room } = props;

    return (
        <div className="rooms-list-item">
            <div className="rooms-list-item-header">
                <div className="rooms-list-item-name">{room.name}</div>
                <div className="rooms-list-item-members">
                    <i className="fas fa-male"></i> {room.participants}
                </div>
            </div>
            <div className="rooms-list-item-section">
                <div className="room-item-tags">
                    <div className="room-item-tag">React</div>
                    <div className="room-item-tag">REST</div>
                    <div className="room-item-tag">JavaScript</div>
                    <div className="room-item-tag">JavaScript</div>
                </div>
            </div>
        </div>
    );
}
