"use client";

import React from "react";
import { Button, Text } from "../atoms";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  buttonLabel = "View Details",
  onButtonClick,
}) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden w-80 transition-transform hover:scale-105 hover:shadow-lg">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 space-y-2">
        <Text>{title}</Text>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
        <Button onClick={onButtonClick}>{buttonLabel}</Button>
      </div>
    </div>
  );
};

export default Card;
