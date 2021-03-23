import React, { useEffect } from "react";
import "./Room.css";
import { useParams, withRouter } from "react-router";
import Peer from "peerjs";
import { v4 as uuidv4 } from "uuid";
import { addAudio } from "../../utils/PeerConnection";
import socket from "../../utils/SocketConnection";

function Room(props) {
    const peers = {};
    const userId = uuidv4();
    const { roomId } = useParams();

    useEffect(() => {
        const peer = new Peer(undefined, {
            host: "/",
            port: 3001,
        });

        const connectToNewUser = (userId, stream) => {
            const call = peer.call(userId, stream);

            call.on("stream", (userVideoStream) => {
                addAudio(userVideoStream);
            });

            peers[userId] = call;
        };

        peer.on("open", (id) => {
            socket.emit("join-room", roomId, id);
        });

        navigator.mediaDevices
            .getUserMedia({ audio: true, video: true })
            .then((stream) => {
                addAudio(stream);

                peer.on("call", (call) => {
                    call.answer(stream);
                    call.on("stream", (userVideoStream) => {
                        addAudio(userVideoStream);
                    });
                });

                setInterval(() => {
                    socket.on("user-connected", (userId) => {
                        console.log("lol");
                        connectToNewUser(userId, stream);
                    });
                }, 1000);
            });
        socket.on("user-disconnected", (userId) => {
            if (peers[userId]) peers[userId].close();
        });
    }, []);

    return (
        <div className="col-10 mt-2">
            {userId}
            <div id="video-grid"></div>
        </div>
    );
}

export default withRouter(Room);
