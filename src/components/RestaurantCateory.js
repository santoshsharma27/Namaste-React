import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import ItemList from "./ItemList";

function RestaurantCategory({ data, num, curOpen, onOpen }) {
  const isOpen = num === curOpen;

  function handleClick() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className="w-full md:w-8/12 bg-gray-50 p-4 mx-auto my-4 rounded-lg shadow-lg">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-semibold text-lg">
          {data.title} ({data?.itemCards.length})
        </span>
        {isOpen ? (
          <span>
            <HiChevronUp />
          </span>
        ) : (
          <span>
            <HiChevronDown />
          </span>
        )}
      </div>
      {isOpen && <ItemList items={data.itemCards} />}
    </div>
  );
}

export default RestaurantCategory;
