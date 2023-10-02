import Item from "./item";
import ItemList from "./item-list";
export default function Page() {
  return (
    <div className="bg-indigo-950">
      <h2 className="text-2xl font-bold">Shopping List</h2>
      <ItemList />
    </div>
  );
}
