import React from "react";
import "./RoomsCategory.css";
import ScrollContainer from "react-indiana-drag-scroll";
import RoomItem from "../RoomItem/RoomItem";

export default function RoomsCategory(props) {
    const { category } = props;

    const roomsList = category.rooms.map((el, index) => {
        return <RoomItem key={index} room={el} />;
    });

    return (
        <div className="category-item">
            <div className="category-header">
                <h2>{category.name}</h2>
            </div>
            <div className="category-rooms-list">
                <ScrollContainer
                    vertical={false}
                    horizontal={true}
                    stopPropagation={true}
                    className="scroll-container category-rooms-list-container"
                >
                    {roomsList}
                    {roomsList}
                    {roomsList}
                    {roomsList}
                    {roomsList}
                </ScrollContainer>
            </div>
        </div>
    );
}
