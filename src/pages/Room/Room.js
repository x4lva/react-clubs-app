import React, { useEffect } from "react";
import "./Room.css";
import { useParams, withRouter } from "react-router";
import Peer from "peerjs";
import { v4 as uuidv4 } from "uuid";
import socket from "../../utils/SocketConnection";
import firebase from "../../utils/FirebaseStore";

function Room(props) {
    const peers = {};
    const userId = uuidv4();
    const { roomId } = useParams();

    useEffect(() => {
        firebase
            .database()
            .ref("rooms")
            .set({
                [roomId]: {
                    users: { ["dontLimited"]: "x4lva" },
                },
            })
            .then((r) => {});

        const videoGrid = document.getElementById("video-grid");

        const myPeer = new Peer(undefined, {
            host: "/",
            port: "3001",
        });
        const myVideo = document.createElement("audio");
        myVideo.muted = true;
        myVideo.controls = true;
        const peers = [];
        navigator.mediaDevices
            .getUserMedia({
                audio: true,
            })
            .then((stream) => {
                addVideoStream(myVideo, stream);

                myPeer.on("call", (call) => {
                    call.answer(stream);
                    const video = document.createElement("audio");
                    video.controls = true;
                    call.on("stream", (userVideoStream) => {
                        addVideoStream(video, userVideoStream);
                    });
                });
                socket.on("user-connected", (userId) => {
                    setTimeout(() => {
                        connectToNewUser(userId, stream);
                    }, 1000);
                });
                socket.on("user-connected", (userId) => {
                    connectToNewUser(userId, stream);
                });
            });

        socket.on("user-disconnected", (userId) => {
            if (peers[userId]) peers[userId].close();
        });

        myPeer.on("open", (id) => {
            socket.emit("join-room", roomId, id);
        });

        function connectToNewUser(userId, stream) {
            const call = myPeer.call(userId, stream);
            const video = document.createElement("audio");
            video.controls = true;
            call.on("stream", (userVideoStream) => {
                console.log(userVideoStream);
                addVideoStream(video, userVideoStream);
            });
            call.on("close", () => {
                video.remove();
            });

            peers[userId] = call;
        }

        function addVideoStream(video, stream) {
            video.srcObject = stream;
            video.addEventListener("loadedmetadata", () => {
                video.play();
            });
            videoGrid.append(video);
        }
    }, []);

    return (
        <div className="col-10 mt-2">
            {userId}
            <div id="video-grid"></div>
        </div>
    );
}

export default withRouter(Room);
