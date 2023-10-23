"use client";
import ItemList from "./item-list";
import { useState } from "react";
import itemsData from "../week5/items.json";
import NewItem from "./new-item";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };
  return (
    <div className="bg-cyan-950">
      <h2 className="text-3xl font-bold">Shopping List</h2>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </div>
  );
}
