"use client";
import { useState } from "react";
import NewItem from "./new-item";
import Item from "./item";
import ItemList from "./item-list";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");

  const [quantity, setQuantity] = useState(1);

  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      name,
      quantity,
      category,
    };

    onAddItem(item); // this is the function that was passed in as a prop

    setName("");
    setQuantity(1);
    setCategory("produce");

    console.log(item);
    alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };
  // Remove unused function
  // const handleNameChange = (event) => {
  //   setName(event.target.value);
  // };
  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <main className="flex justify-center w-full">
      <form
        onSubmit={handleSubmit}
        className="p-3 m-4 bg-gray-800 text-black max-w-sm w-full"
      >
        <div className="mb-2">
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Item name"
            req
            onChange={(event) => setName(event.target.value)}
            required
            className="border-2 w-full border-gray-400 rounded-md  p-2 ml-1 "
          />
        </div>
        <div className="flex justify-between">
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="99"
            value={quantity}
            onChange={(event) => setQuantity(Number(event.target.value))}
            required
            className="border-2 border-gray-400 rounded-md p-2 w-20 ml-1"
          />

          <select
            id="category"
            name="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="border-2 border-gray-400 rounded-md p-2 w-30 ml-1"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen-foods">Frozen Foods</option>
            <option value="canned-goods">Canned Goods</option>
            <option value="dry-goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button
          type="Add"
          className="w-full mt-4 py-2 px-4 bg-sky-900 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          + Add Item
        </button>
      </form>
    </main>
  );
}
