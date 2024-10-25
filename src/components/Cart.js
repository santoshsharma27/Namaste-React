import React, { useState } from "react";
import EmptyCart from "../ui/EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import LinkButton from "../ui/LinkButton";
import ItemList from "./ItemList";
import Button from "../ui/Button";
import { clearCart } from "../utils/cartSlice";
import ConfirmModal from "./ConfirmModal";
import CartItems from "./CartItems";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cart);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  function handleClearCart() {
    setIsModalOpen(true); // Open the modal instead of using confirm dialog
  }

  function confirmClearCart() {
    dispatch(clearCart());
    setIsModalOpen(false); // Close the modal after confirmation
  }

  function cancelClearCart() {
    setIsModalOpen(false); // Close the modal if cancelled
  }

  if (!cartItems.length) return <EmptyCart />;

  return (
    <div className="mt-5 w-11/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 m-auto p-4 pt-16">
      <h2 className="mt-7 text-2xl font-semibold">Your Cart Items</h2>

      <div className="mt-5 divide-y divide-stone-200">
        <CartItems items={cartItems} />
      </div>

      <div className="mt-6 flex flex-col space-y-3 sm:flex-row sm:space-x-2 sm:space-y-0 justify-between">
        <Button to="/order/new" type="primary">
          Order
        </Button>

        <Button type="secondary" onClick={handleClearCart}>
          Clear cart
        </Button>
      </div>

      {/* Modal for confirmation */}
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={cancelClearCart}
        onConfirm={confirmClearCart}
      />
    </div>
  );
}

export default Cart;
