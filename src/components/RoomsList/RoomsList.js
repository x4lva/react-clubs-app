import React, { useEffect, useState } from "react";
import "./RoomsList.scss";
import RoomsCategory from "../RoomsCategory/RoomsCategory";
import firebase from "../../utils/FirebaseStore";

export default function RoomsList() {
    const [categories, setCategories] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const userCategories = [
        {
            name: "IT",
            rooms: [
                {
                    name: "Discussing about React Hook",
                    participants: 11,
                },
                {
                    name: "Presentation about Node EVP",
                    participants: 11,
                },
                {
                    name: "How to use https protocol correctly",
                    participants: 11,
                },
            ],
        },
        {
            name: "Health",
            rooms: [
                {
                    name: "Discussing about React Hook",
                    participants: 11,
                },
                {
                    name: "Presentation about Node EVP",
                    participants: 11,
                },
                {
                    name: "How to use https protocol correctly",
                    participants: 11,
                },
            ],
        },
        {
            name: "Business",
            rooms: [
                {
                    name: "Discussing about React Hook",
                    participants: 11,
                },
                {
                    name: "Presentation about Node EVP",
                    participants: 11,
                },
                {
                    name: "How to use https protocol correctly",
                    participants: 11,
                },
            ],
        },
        {
            name: "Sport",
            rooms: [
                {
                    name: "Discussing about React Hook",
                    participants: 11,
                },
                {
                    name: "Presentation about Node EVP",
                    participants: 11,
                },
                {
                    name: "How to use https protocol correctly",
                    participants: 11,
                },
            ],
        },
    ];

    useEffect(() => {
        const rooms = firebase.database().ref("rooms");
        rooms.on("value", (snapshot) => {
            console.log(snapshot.val());
        });
        setTimeout(() => {
            setCategories(userCategories);
            setLoading(false);
        }, 2000);
    }, []);

    if (isLoading) {
        return "LOADING...";
    }

    return (
        <div className="rooms-lists">
            {categories.map((el, index) => {
                return <RoomsCategory category={el} key={index} />;
            })}
        </div>
    );
}
