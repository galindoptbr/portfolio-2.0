"use client";

import React, { useState } from "react";

interface ReadMore {
  text: string;
}

export const ReadMore: React.FC<ReadMore> = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const maxLength = 100;
  const truncatedText =
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  const displayedText = isExpanded ? text : truncatedText;

  return (
    <div>
      {displayedText.split("\n").map((paragraph, index) => (
        <p key={index}>
          {paragraph}
          <br />
        </p>
      ))}
      {text.length > maxLength && (
        <span onClick={toggleReadMore} className="text-purple-500 cursor-pointer">
          {isExpanded ? "show less" : "read more"}
        </span>
      )}
    </div>
  );
};
