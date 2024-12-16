import React, { useState } from "react";
import Card from "./Card";

const RenderedCards = () => {
  const cards = [
    {
      image: "https://img.freepik.com/free-photo/idyllic-tropical-coastline-blue-waters-sandy-beach-tranquil-sunset-generated-by-artificial-intelligence_25030-67517.jpg?t=st=1733995156~exp=1733998756~hmac=397303bceeb2b55df0e29677d1a1040b850ef345eb1ded0f4c2c4fda2eeea284&w=996", // Ocean Pollution
      title: "Ocean Pollution",
      description: "Explore rising ocean pollution, its impact, and solutions.",
    },
    {
      image: "https://img.freepik.com/free-photo/skaftafell-glacier-vatnajokull-national-park-iceland_335224-569.jpg?t=st=1733994787~exp=1733998387~hmac=91dcd55384a2e43a147e8c16d0c37479fb7092ceacef629fe474806e994caff5&w=1380", // Glacier Melting
      title: "Glacier Melting",
      description: "Discover how glaciers are melting and impacting climate change.",
    },
    {
      image: "https://img.freepik.com/premium-photo/tree-stump-with-tree-middle-it_1293074-253663.jpg?w=826", // Forest Clearance
      title: "Forest Clearance",
      description: "Understand deforestation and its effects on ecosystems.",
    },
    {
      image: "https://img.freepik.com/free-photo/smokestacks-against-clear-sky-industrial-landscape_91128-4313.jpg?t=st=1733994938~exp=1733998538~hmac=fcf9feb4b28c6c5bbe50bb16708b5fa7b448c3fbfcb43b389b5afeace632c28b&w=1060", // GHG Emissions
      title: "GHG Emissions",
      description: "Learn about greenhouse gas emissions and how to reduce them.",
    },
  ];
  

  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-10">
      <div className="flex space-x-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            isExpanded={expandedIndex === index}
            onClick={() => setExpandedIndex(index === expandedIndex ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RenderedCards;
