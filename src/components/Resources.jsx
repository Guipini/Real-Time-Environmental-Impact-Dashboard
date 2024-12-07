import { useState } from "react";
import Navigation from "./Navigation";
import SearchBar from "./resources/SearchBar";
import CategoryFilter from "./resources/CategoryFilter";
import ResourcesGrid from "./resources/ResourcesGrid";
import { BookOpen } from "lucide-react";

// Export the resources array
export const resources = [
  {
    id: 1,
    title: "Understanding Carbon Footprint",
    description:
      "Learn the basics of carbon footprint and how daily activities impact the environment.",
    link: "https://example.com/carbon-footprint",
    category: "Education",
    imageUrl:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Sustainable Living Guide",
    description:
      "Practical tips and strategies for reducing your environmental impact through lifestyle changes.",
    link: "https://example.com/sustainable-living",
    category: "Lifestyle",
    imageUrl:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Renewable Energy Basics",
    description:
      "Explore different types of renewable energy and their benefits for the environment.",
    link: "https://example.com/renewable-energy",
    category: "Energy",
    imageUrl:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Green Transportation",
    description:
      "Discover eco-friendly transportation options and their environmental benefits.",
    link: "https://example.com/green-transport",
    category: "Transport",
    imageUrl:
      "https://images.unsplash.com/photo-1519003300449-424ad0405076?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  },
];

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = ["Education", "Lifestyle", "Energy", "Transport"];

  // Filter resources based on search query and selected category
  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      !selectedCategory || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto p-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <BookOpen className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Environmental Resources</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of resources to learn more about
            reducing your carbon footprint and living sustainably.
          </p>
        </div>

        <SearchBar onSearch={setSearchQuery} />

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <ResourcesGrid resources={filteredResources} />

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No resources found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;
