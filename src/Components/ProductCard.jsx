import { Link } from "react-router-dom";
import { shortenText } from "../helpers/helper";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";
import { useBasket } from "../services/contexts/BasketContext";

function ProductCard({ product }) {
  const { id, title, price, image } = product;
  const { dispatch } = useBasket();
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

        <div className="flex">
          <RiDeleteBin6Line
            className="icon"
            onClick={() => clickHandler("REMOVE_ITEM")}
          />
          <IoRemoveSharp
            className="icon"
            onClick={() => clickHandler("DECREASE")}
          />
          <IoAddSharp
            className="icon"
            onClick={() => clickHandler("INCREASE")}
          />
          <TbShoppingBagCheck
            className="icon"
            onClick={() => clickHandler("ADD_ITEM")}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
