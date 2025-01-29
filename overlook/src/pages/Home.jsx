import React from "react";
import image1 from "../assets/images/sunset-mountains-norway.jpg";
import image2 from "../assets/images/waterfront-stockholm.jpg";
import image3 from "../assets/images/frankfurt-skyline-germany.jpg";
import { Slideshow } from "../components/Slideshow.jsx/Slideshow";
import { Section } from "../components/Section/Section";
import { Title } from "../components/Title/Title";
import { NewsCards } from "../components/NewsCards/NewsCards";
import { RoomsCards } from "../components/RoomsCards/RoomsCards";

const homeImages = [image1, image2, image3]; 

export const Home = () => {
  return (
    <>
      <Slideshow images={homeImages}/> 

      <Section>
        <Title text="Sidste Nyt"/>
        <NewsCards />
      </Section>

      <Section>
        <Title text="Se vores udvalg af værelser"/>
        <RoomsCards/>
      </Section>
    </>
  );
}