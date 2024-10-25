import { CDN_URL } from "../utils/constant";
import {
  addItem,
  decrementItemQuantity,
  deleteItem,
  incrementItemQuantity,
} from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Toast from "./Toast";

function ItemList({ items, setNotification }) {
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
    dispatch(addItem(item));
    const itemId = item.card.info.id;
    const currentCount = itemCounts[itemId];
    if (currentCount >= 1) {
      dispatch(incrementItemQuantity(itemId));
      setItemCounts((prevCounts) => ({
        ...prevCounts,
        [itemId]: currentCount + 1,
      }));
    }
    setNotification({ type: "add", message: "Item added to cart!" });
    setTimeout(() => {
      setNotification(null);
    }, 500);
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
    setNotification({ type: "delete", message: "Item removed from cart!" });
    setTimeout(() => {
      setNotification(null);
    }, 500);
  }

  return (
    <div className="space-y-6 p-4 relative">
      {items?.map((item) => {
        const itemId = item.card.info.id;
        const currentCount = itemCounts[itemId] || 0;

        return (
          <div
            className="flex flex-col md:flex-row items-center justify-between p-4 bg-white shadow-lg rounded-lg hover:shadow-md"
            key={itemId}
            style={{ minHeight: "160px" }}
          >
            <div className="flex-1 text-left md:w-3/5">
              <div className="font-bold text-lg text-gray-800">
                {item?.card?.info?.name}
              </div>
              <span className="block text-sm text-gray-500 mt-1">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <p className="text-sm text-gray-600 mt-2">
                {item.card.info.description}
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center md:w-2/5 mt-4 md:mt-0 justify-around">
              <img
                className="w-32 h-24 object-cover rounded-md mb-4 md:mb-0 md:mr-4 shadow-sm"
                src={CDN_URL + item?.card?.info?.imageId}
                alt={item?.card?.info?.name}
              />
              <div className="flex items-center space-x-2">
                <button
                  className="w-10 h-10 flex justify-center items-center border border-green-500 text-green-500 font-semibold rounded-md transition-colors hover:bg-green-500 hover:text-white"
                  onClick={() => addHandler(item)}
                >
                  +
                </button>
                {currentCount > 0 && (
                  <span className="text-lg font-semibold">{currentCount}</span>
                )}
                {currentCount > 0 && (
                  <button
                    className="w-10 h-10 flex justify-center items-center border border-red-500 text-red-500 font-semibold rounded-md transition-colors hover:bg-red-500 hover:text-white"
                    onClick={() => deleteHandler(item)}
                  >
                    -
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function ItemListWithToast({ items }) {
  const [notification, setNotification] = useState(null);

  return (
    <>
      <Toast notification={notification} />
      <ItemList items={items} setNotification={setNotification} />
    </>
  );
}
