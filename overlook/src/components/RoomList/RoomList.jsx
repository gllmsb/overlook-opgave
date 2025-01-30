import React, { useState } from "react";
import styles from "./RoomList.module.scss";

export const RoomList = ({ rooms }) => {
  const [expandedRoom, setExpandedRoom] = useState(null);

  const toggleRoomDetails = (roomId) => {
    setExpandedRoom(expandedRoom === roomId ? null : roomId);
  };

  if (!rooms || rooms.length === 0) return <p>No rooms available.</p>;

  return (
    <div className={styles.roomList}>
      {rooms.map((room) => (
        <div key={room.id} className={styles.roomItem}>
          <button className={styles.roomTitle} onClick={() => toggleRoomDetails(room.id)}>
            {room.title}
          </button>
          {expandedRoom === room.id && (
            <div className={styles.roomDetails}>
              <p>{room.description}</p>
              <p>Size: {room.area}</p>
              <p>Capacity: {room.numPersons} persons</p>
              <p>Normal Price: {room.normalPrice} DKK</p>
              <p>Flex Price: {room.flexPrice} DKK</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
