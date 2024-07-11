import ShopCard from "../Components/ShopCard";
import { useBasket } from "../services/contexts/BasketContext";
import { GoChecklist, GoHash } from "react-icons/go";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

function CheckoutPage() {
  const { state, dispatch } = useBasket();

  return (
    <section className="flex justify-between gap-8">
      <div className="w-1/4 p-4 border-2 border-dashed rounded-lg text-BLUE border-BLUE">
        <ul className="space-y-4">
          <li className="flex items-center gap-2">
            <span className="flex items-center gap-1">
              <GoChecklist className="size-5" /> Total :
            </span>
            <span className="font-semibold text-ORANGE">{state.total} $</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="flex items-center gap-1">
              <GoHash className="size-5" /> Quantity :
            </span>
            <span className="font-semibold text-ORANGE">{state.counter}</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="flex items-center gap-1">
              <IoIosCheckmarkCircleOutline className="size-5" /> Status :
            </span>
            {!state.checkOut ? (
              <span className="font-semibold text-ORANGE">Pending...</span>
            ) : (
              <span className="font-semibold text-ORANGE">In Process</span>
            )}
          </li>
        </ul>
        <button
          className="w-full px-4 py-2 mt-12 rounded-lg bg-ORANGE"
          onClick={() => dispatch({ type: "CHECKOUT" })}
        >
          CheckOut
        </button>
      </div>
      <div className="flex flex-col w-3/4 gap-4 ">
        {!state.selectedItems.length && <p>Nothing in your basket</p>}
        {state.selectedItems.map((item) => (
          <ShopCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

export default CheckoutPage;
