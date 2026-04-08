import React, { useMemo } from "react";
import { cartItems } from "../data/cartMock";

const CartDrawer = ({ onClose }) => {
  const total = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2),
    []
  );

  return (
    <aside className="fixed right-0 top-0 z-[60] flex h-full w-full max-w-md flex-col border-l border-white/10 bg-[#0b0b0b] shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-[#c8f400]">
            <i className="ri-shopping-bag-3-line text-lg"></i>
          </span>
          <div className="text-lg font-semibold">Cart</div>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
            {cartItems.length} items
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-full border border-white/10 px-3 py-1 text-sm text-white/70 hover:text-white"
        >
          x
        </button>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto p-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-12 w-12 rounded-lg object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-white/90">
                  {item.title}
                </div>
                <div className="mt-1 text-lg font-semibold text-[#c8f400]">
                  ${item.price.toFixed(2)}
                </div>
                <div className="text-xs text-white/50">${item.each} each</div>
                <div className="mt-3 flex items-center gap-2 text-white/70">
                  <button
                    type="button"
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10"
                  >
                    -
                  </button>
                  <span className="text-sm font-semibold">{item.qty}</span>
                  <button
                    type="button"
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                type="button"
                className="mt-1 text-lg text-red-400/80 hover:text-red-400"
              >
                <i className="ri-delete-bin-6-line"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 p-6">
        <div className="flex items-center justify-between text-sm text-white/60">
          <span>Total</span>
          <span className="text-xl font-semibold text-white">${total}</span>
        </div>
        <button
          type="button"
          className="mt-4 w-full rounded-2xl bg-volt py-3 text-center text-sm font-semibold text-[#0b0b0b] shadow-[0_10px_30px_rgba(200,244,0,0.35)]"
        >
          Checkout <span className="ml-2">-&gt;</span>
        </button>
        <button
          type="button"
          className="mt-3 w-full text-center text-xs text-white/40"
        >
          Clear cart
        </button>
      </div>
    </aside>
  );
};

export default CartDrawer;
