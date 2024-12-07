import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const ResourceCard = ({ title, description, link, category, imageUrl }) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      {imageUrl && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <span className="text-sm px-3 py-1 bg-green-100 text-green-800 rounded-full">
            {category}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-green-600 hover:text-green-700"
        >
          Learn More
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
