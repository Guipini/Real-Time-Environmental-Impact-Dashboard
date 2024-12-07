import React from "react";
import ResourceCard from "./ResourceCard";

const ResourcesGrid = ({ resources }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {resources.map((resource) => (
        <ResourceCard key={resource.id} {...resource} />
      ))}
    </div>
  );
};

export default ResourcesGrid;
