import React, { useState } from "react";
import "./search-bar.css";
import { useNavigate } from "react-router-dom";

const categories = [
  "All",
  "Himachal Pradesh",
  "Leh",
  "Uttarakhand",
  "Kashmir",
  "Andaman",
  "Goa",
  "Kerala",
  "Rajasthan",
  "Spiti Valley",
];

const CategorySelector = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);

    navigate(`/tours?category=${category}`, { state: { category } });
  };

  return (
    <div className="category__selector">
      <div className="categories-lg">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`category__item ${
              selectedCategory === category ? "selected" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </div>
        ))}
      </div>

      <select
        className="dropdown-sm"
        value={selectedCategory}
        onChange={(e) => handleCategoryClick(e.target.value)}
      >
        <option value="" disabled>
          Select Category
        </option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
