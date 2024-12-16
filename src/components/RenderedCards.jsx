import React, { useState } from "react";
import Card from "./Card";
import ocean from "../assets/ocean.avif";
import glacier from "../assets/glacier.avif";
import forest from "../assets/forest.jpg";
import ghg from "../assets/ghg.avif";

const RenderedCards = () => {
  const cards = [
    {
      image: ocean, // Ocean Pollution
      title: "Ocean Pollution",
      description: "Explore rising ocean pollution, its impact, and solutions.",
    },
    {
      image: glacier, // Glacier Melting
      title: "Glacier Melting",
      description: "Discover how glaciers are melting and impacting climate change.",
    },
    {
      image: forest, // Forest Clearance
      title: "Forest Clearance",
      description: "Understand deforestation and its effects on ecosystems.",
    },
    {
      image: ghg, // GHG Emissions
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
