import { Link } from "react-router-dom";
import { itemQuantity, shortenText } from "../helpers/helper";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";
import { useBasket } from "../services/contexts/BasketContext";

function ProductCard({ product }) {
  const { id, title, price, image } = product;
  const { state, dispatch } = useBasket();
  const quantity = itemQuantity(state, id);
  function clickHandler(value) {
    dispatch({ type: value, payload: product });
  }
  return (
    <div className="w-[24%] border-2  border-dashed border-BLUE rounded-lg bg-WHITE overflow-hidden self-stretch px-2">
      <div className="p-4 mx-auto h-44 w-36">
        <img src={image} alt={title} className="w-full h-full" />
      </div>

      <h2 className="mb-1 font-medium text-ORANGE">{shortenText(title)}</h2>

      <h3 className="mb-2 font-medium">{price} $</h3>

      <div className="flex items-center justify-between my-3">
        <Link to={`/Products/${id}`}>
          <TbListDetails className="icon" />
        </Link>

        <div className="flex items-center gap-1.5">
          {quantity === 1 && (
            <div className="p-1 rounded-lg cursor-pointer bg-ORANGE">
              <RiDeleteBin6Line
                className="size-5 text-GRAY"
                onClick={() => clickHandler("REMOVE_ITEM")}
              />
            </div>
          )}
          {quantity > 1 && (
            <div className="p-1 rounded-lg cursor-pointer bg-ORANGE">
              <IoRemoveSharp
                className="size-5 text-GRAY"
                onClick={() => clickHandler("DECREASE")}
              />
            </div>
          )}
          {quantity > 0 && <span className="font-semibold">{quantity}</span>}
          {quantity > 0 && (
            <div className="p-1 rounded-lg cursor-pointer bg-ORANGE">
              <IoAddSharp
                className="size-5 text-GRAY"
                onClick={() => clickHandler("INCREASE")}
              />
            </div>
          )}
          {quantity === 0 && (
            <div className="p-1 rounded-lg cursor-pointer bg-ORANGE">
              <TbShoppingBagCheck
                className="size-5 text-GRAY"
                onClick={() => clickHandler("ADD_ITEM")}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
