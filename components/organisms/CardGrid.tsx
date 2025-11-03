"use client";

import React from "react";
import { Button, Text } from "../atoms";

interface CardData {
  id: number;
  title: string;
  description: string;
  image: string;
}

const sampleCards: CardData[] = [
  {
    id: 1,
    title: "Modern Apartment",
    description: "A cozy 2-bedroom apartment in yaounde.",
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Luxury Villa",
    description: "Spacious villa with private pool and garden view in limbe.",
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Beach House",
    description: "Enjoy the ocean breeze from this stunning beach house in Edea.",
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=600&q=80",
  },
];

const CardGrid: React.FC = () => {
  return (
    <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-8">
      {sampleCards.map((card) => (
        <div
          key={card.id}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
        >
          <img
            src={card.image}
            alt={card.title}
            className="h-48 w-full object-cover"
          />

        <div className="p-4 flex flex-col justify-between h-40">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
           {card.title}
         </h2>

         <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
           {card.description}
        </p>

        <Button>View Details</Button>
        </div>

        </div>
      ))}
    </section>
  );
};

export default CardGrid;
