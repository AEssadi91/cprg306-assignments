"use client";
import React, { useState } from "react";
import Item from "./item";
import items from "../week5/items.json";


export default function ItemList({items}) {
  const [sortBy, setSortBy] = useState("name");
  const [groupedCategory, setGroupedCategory] = useState(false);

  

  const groupedItems = items.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

  const sortedCategories = Object.keys(groupedItems).sort();
  sortedCategories.forEach((category) => {
    groupedItems[category].sort((a, b) => a.name.localeCompare(b.name));
  });

  const sortedItems = [...items].sort((a, b) => 
    sortBy === "name" ? a.name.localeCompare(b.name) :
    sortBy === "category" ? a.category.localeCompare(b.category) : 
    0
  );

  return (
    <div>
      <label for="sort">Sort by:</label>
      <button
        className="p-1 m-2 w-28"
        onClick={() => setSortBy("name")}
        style={{ backgroundColor: sortBy == "name" ? "#0284c7" : "#0c4a6e" }}
      >
        Name
      </button>
      <button
        className="p-1 m-2 w-28"
        onClick={() => setSortBy("category")}
        style={{
          backgroundColor: sortBy == "category" ? "#0284c7" : "#0c4a6e",
        }}
      >
        Category
      </button>

      <button
        className="p-1 m-2 w-28"
        onClick={() => setGroupedCategory(!groupedCategory)}
        style={{ backgroundColor: groupedCategory ? "#0284c7" : "#0c4a6e" }}
      >
        Grouped Category
      </button>

      {groupedCategory
        ? sortedCategories.map((category) => (
            <div key={category}>
              <h2 className="capitalize">{category}</h2>
              {groupedItems[category].map((item) => (
                <Item key={item.id} item={item} />
              ))}
            </div>
              ))
              : sortedItems.map((item) => <Item key={item.id} item={item} />)}
            </div>
  );
}
