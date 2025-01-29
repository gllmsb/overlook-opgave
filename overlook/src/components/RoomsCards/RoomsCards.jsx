import React from "react";
import styles from "./RoomsCards.module.scss";
import { useGet } from "../../hooks/useGet"; 

import standardSingle from "../../assets/images/room-standard-single-bed.jpg";
import superiorPlus from "../../assets/images/room-superior-plus-bedroom.jpg";
import juniorPlus from "../../assets/images/room-junior-suite-bedroom.jpg";

// Define room images
const roomsImages = {
  "Standard Single": standardSingle,
  "Junior Suite": juniorPlus,
  "Superior Plus": superiorPlus,
};

const API_URL = "http://localhost:4000/destinations/danmark/aalborg/overlook-aalborg-city";

export const RoomsCards = () => {
  const { data, loading, error } = useGet(API_URL);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data.</p>;
  }

  let cities = data?.cities;
  if (!cities || cities.length === 0) {
    return <p>No cities found.</p>;
  }

  let hotels = cities[0].hotels;
  if (!hotels || hotels.length === 0) {
    return <p>No hotels found.</p>;
  }

  let roomsList = hotels[0].rooms;
  if (!roomsList || roomsList.length === 0) {
    return <p>No rooms found.</p>;
  }

  let selectedRooms = [];
  let roomOrder = ["Standard Single", "Junior Suite", "Superior Plus"];

  for (let i = 0; i < roomOrder.length; i++) {
    for (let j = 0; j < roomsList.length; j++) {
      if (roomsList[j].title === roomOrder[i]) {
        selectedRooms.push(roomsList[j]);
      }
    }
  }

  return (
    <div className={styles.roomsGrid}>
      {selectedRooms.map((room, index) => (
        <div key={room.room_id || index} className={styles.card}>
          <img src={roomsImages[room.title] || standardSingle} alt={room.title} className={styles.image} />
          <div className={styles.content}>
            <h3 className={styles.title}>{room.title}</h3>
            <p className={styles.description}>{room.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
