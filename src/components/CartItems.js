import { useDispatch, useSelector } from "react-redux";
import {
  incrementItemQuantity,
  decrementItemQuantity,
  deleteItem,
} from "../utils/cartSlice";
import { useState, useEffect } from "react";

function CartItems({ items }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cart);
  const [itemCounts, setItemCounts] = useState({});

  // Initialize item counts from the cart
  useEffect(() => {
    const counts = {};
    cartItems.forEach((item) => {
      counts[item.card.info.id] = item.quantity || 1;
    });
    setItemCounts(counts);
  }, [cartItems]);

  function addHandler(item) {
    const itemId = item.card.info.id;
    dispatch(incrementItemQuantity(itemId));
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: (prevCounts[itemId] || 0) + 1,
    }));
  }

  function deleteHandler(item) {
    const itemId = item.card.info.id;
    const currentCount = itemCounts[itemId] || 0;

    if (currentCount > 1) {
      dispatch(decrementItemQuantity(itemId));
      setItemCounts((prevCounts) => ({
        ...prevCounts,
        [itemId]: currentCount - 1,
      }));
    } else if (currentCount === 1) {
      dispatch(deleteItem(itemId)); // Remove the item from the cart
      setItemCounts((prevCounts) => ({
        ...prevCounts,
        [itemId]: 0,
      }));
    }
  }

  return (
    <div className="space-y-6 p-4">
      {items?.map((item) => {
        const itemId = item.card.info.id;
        const currentCount = itemCounts[itemId] || 0;

        return (
          <div
            className="p-4 border-b flex flex-col md:flex-row items-center justify-between bg-white shadow-lg rounded-lg"
            key={itemId}
          >
            {/* Item Name and Price */}
            <div className="flex-1 text-left w-full md:w-3/5">
              <div className="font-bold text-lg text-gray-800">
                {item?.card?.info?.name}
              </div>
              <span className="block text-sm text-gray-600 mt-1">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>

            {/* Quantity Display and Buttons */}
            <div className="flex items-center justify-center space-x-3 mt-4 md:mt-0 md:w-2/5">
              <button
                className="px-4 py-2 border border-green-500 text-green-500 font-semibold rounded-md transition-colors hover:bg-green-500 hover:text-white"
                onClick={() => addHandler(item)}
              >
                +
              </button>
              <span className="text-lg font-semibold">{currentCount}</span>
              <button
                className="px-4 py-2 border border-red-500 text-red-500 font-semibold rounded-md transition-colors hover:bg-red-500 hover:text-white"
                onClick={() => deleteHandler(item)}
              >
                -
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CartItems;
