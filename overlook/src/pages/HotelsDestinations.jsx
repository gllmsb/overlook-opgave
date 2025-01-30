import React, { useState } from "react";
import styles from "./HotelsDestinations.module.scss";
import { useGet } from "../hooks/useGet";
import { CountryMenu } from "../components/CountryMenu/CountryMenu";
import { CityList } from "../components/CityList/CityList";
import { HotelList } from "../components/HotelList/HotelList";
import { RoomList } from "../components/RoomList/RoomList"; 

const API_URL = "http://localhost:4000/destinations";

export const HotelsDestinations = () => {
  const { data: countries, loading, error } = useGet(API_URL);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [cities, setCities] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [rooms, setRooms] = useState([]);

  const handleSelectCountry = async (countrySlug) => {
    setSelectedCountry(countrySlug);
    setSelectedCity(null);
    setSelectedHotel(null);
    setRooms([]);

    try {
      const response = await fetch(`http://localhost:4000/destinations/${countrySlug}`);
      const data = await response.json();
      setCities(data.cities || []);
    } catch (error) {
      console.error("Error fetching cities:", error);
      setCities([]);
    }
  };

  const handleSelectCity = async (citySlug) => {
    setSelectedCity(citySlug);
    setSelectedHotel(null);
    setRooms([]);

    try {
      const response = await fetch(`http://localhost:4000/destinations/${selectedCountry}/${citySlug}`);
      const data = await response.json();

      if (!data || !data.cities) return;
      const city = data.cities.find(city => city.slug === citySlug);
      setHotels(city?.hotels || []);
    } catch (error) {
      console.error("Error fetching hotels:", error);
      setHotels([]);
    }
  };

  const handleSelectHotel = async (hotelSlug) => {
    setSelectedHotel(hotelSlug);
    setRooms([]);

    try {
      const response = await fetch(`http://localhost:4000/destinations/${selectedCountry}/${selectedCity}/${hotelSlug}`);
      const data = await response.json();

      if (!data || !data.rooms) return;
      setRooms(data.rooms);
    } catch (error) {
      console.error("Error fetching rooms:", error);
      setRooms([]);
    }
  };

  if (loading) return <p>Loading countries...</p>;
  if (error) return <p>Error fetching countries.</p>;

  return (
    <div className={styles.container}>
      <CountryMenu countries={countries} onSelectCountry={handleSelectCountry} />

      {selectedCountry && (
        <div className={styles.details}>
          <h2>{countries.find((c) => c.slug === selectedCountry)?.name}</h2>
          <CityList cities={cities} onSelectCity={handleSelectCity} />
        </div>
      )}

      {selectedCity && <HotelList hotels={hotels} onSelectHotel={handleSelectHotel} />}
      {selectedHotel && <RoomList rooms={rooms} />}
    </div>
  );
};
