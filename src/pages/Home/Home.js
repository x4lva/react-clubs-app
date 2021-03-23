import React, { Component } from "react";
import "./Home.css";
import RoomsList from "../../components/RoomsList/RoomsList";
import ContainerWrapper from "../../components/ContainerWrapper/ContainerWrapper";
import HomeControls from "../../components/HomeControls/HomeControls";
import CreateRoomModal from "../../components/CreateRoomModal/CreateRoomModal";

export default class Home extends Component {
    render() {
        return (
            <ContainerWrapper>
                <HomeControls />
                <RoomsList />
                <CreateRoomModal />
            </ContainerWrapper>
        );
    }
}
