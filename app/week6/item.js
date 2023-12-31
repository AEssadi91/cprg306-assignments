export default function Item({ item }) {
    return (
      <div>
        <ul className="p-2 m-4 hover:my-5 text-base  bg-slate-900 max-w-sm ">
          <li className="text-Gray-900"> {item.name} </li>
          <li>Buy {item.quantity} of {item.category}</li>
        </ul>
      </div>
    );
  }