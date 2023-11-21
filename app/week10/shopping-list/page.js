"use client";
import { redirect } from "next/navigation";
import React, { useState, useEffect } from "react";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { getItem, addItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";


export default function Page() {
  const [ingredient, setIngredient] = useState(null);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const loadItems = async () => {
    const loadedItems = await getItem(user.uid);
    setItems(loadedItems);
  };
  useEffect(() => {
    loadItems();
  }, [user]); // Changed the dependency to user

  const handleItemAdd = async (item) => {
    try {
      let id = await addItem(user.uid, item);
      setItems((prevItems) => [...prevItems, { id, ...item }]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleItemClicked = (itemName) => {
    const cleanItemName = itemName
      .replace(/[^a-z\s]+$/i, "")
      .trim()
      .split(",")[0]
      .replace(" ", "_");
    setIngredient(cleanItemName);
  };

  if (!user) {
    redirect("/week10", "replace");
  }
  const handleItemSelect = (item) => {
    if (!item?.name) {
      console.error("Invalid item provided:", item);
    }

    setItems((prevItems) => [...prevItems, item]);
    const cleanedName = item.name
      .split(",")[0]
      .trim()
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      );
    setSelectedItemName(cleanedName);
  };
  if (user) {
    return (
      <main className="p-2 flex">
        <div className="bg-cyan-950 w-1/2 pr-3">
          <h2 className="text-3xl font-bold">Shopping List</h2>
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className=" w-1/2 pr-3">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </main>
    );
  }
}
