import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Card from "./Components/Card";
const cardInfo = [
  {
    title: "Bulldog",
    description:"The Bulldog is a British breed of dog of mastiff type. It may also be known as the English Bulldog or British Bulldog. It is a medium-sized, muscular dog of around 40–55 lb. They have large heads with thick folds of skin around the face and shoulders, and a relatively flat face with a protruding lower jaw.",
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQVR4OnzEsBOTa4Uu0cDYZAxIxMlWOzyzmgml5Zp-EMs1PT-2z0",
    links: {
      link1: "https:www.facebook.com",
      link2: "https://www.google.com",
    },

    title: "Golden Retriever",
    description:
      "The Golden Retriever is a Scottish breed of retriever dog of medium size. It is characterised by a gentle and affectionate nature and a striking golden coat. It is commonly kept as a pet and is among the most frequently registered breeds in several Western countries.",
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS6Do-GyWRlsizulNhTbXMP_X1gNAycbDi1WRd7nLYLmQqbNe9C",
    links: {
      link1: "https:www.facebook.com",
      link2: "https://www.google.com",
    },

    title: "Siberian Husky",
    description:
      "The Siberian Husky is a medium-sized working sled dog breed. The breed belongs to the Spitz genetic family. It is recognizable by its thickly furred double coat, erect triangular ears, and distinctive markings, and is smaller than the similar-looking Alaskan Malamute.",
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQK7oan1zO7fAWBPHyOC0dgUjvQgsTX_zQJroHiOTz53pcFuYPK",
    links: {
      link1: "https:www.facebook.com",
      link2: "https://www.google.com",
    },
  },
];

function App(){
  return (
    <>
    <card imgSrc={cardInfo[0].img} cardTitle={cardInfo[0].title} cardDescription={cardInfo[0].description} cardLink1={cardInfo[0].links.link1} cardLink2={cardInfo[0].links.link2}></card>
    <card imgSrc={cardInfo[1].img} cardTitle={cardInfo[1].title} cardDescription={cardInfo[1].description} cardLink1={cardInfo[1].links.link1} cardLink2={cardInfo[1].links.link2}></card>
    <card imgSrc={cardInfo[2].img} cardTitle={cardInfo[2].title} cardDescription={cardInfo[2].description} cardLink1={cardInfo[2].links.link1} cardLink2={cardInfo[2].links.link2}></card>

    </>
  )
}
export default App;
