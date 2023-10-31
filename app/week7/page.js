"use client";
import React, { useState } from "react";
import ItemList from "./item-list";
import itemsData from "../week5/items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleItemSelect = (item) => {
    if (!item?.name) {
        console.error("Invalid item provided:", item);
        return;
    }

    setItems((prevItems) => [...prevItems, item]);
    const cleanedName = item.name.split(",")[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    setSelectedItemName(cleanedName);
  };

  return (
    <div className="bg-cyan-950">
      <h2 className="text-3xl font-bold">Shopping List</h2>
      <div className="flex">
        
      </div>
      <MealIdeas ingredient={selectedItemName} />
      <ItemList items={items} onItemSelect={handleItemSelect} />
    </div>
  );
}
