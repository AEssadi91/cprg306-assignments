"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ItemList from "./item-list";
import itemsData from "../week5/items.json";
import MealIdeas from "./meal-ideas";
import dynamic from 'next/dynamic';

const useUserAuth = dynamic(
  () => import('./_utils/auth-context').then((mod) => mod.useUserAuth),
  { ssr: false }
);
export default function Page() {
  
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  const router = useRouter();
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  if (!user) {
    redirect(router, "/week8/login");
    
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
