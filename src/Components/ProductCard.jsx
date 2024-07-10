import { Link } from "react-router-dom";
import { shortenText } from "../helpers/helper";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";

function ProductCard({ product }) {
  const { id, title, price, image } = product;
  return (
    <div className="w-[24%] border-2  border-dashed border-BLUE rounded-lg bg-WHITE overflow-hidden self-stretch px-2">
      <div className="mx-auto p-4 h-44 w-36">
        <img src={image} alt={title} className="w-full  h-full" />
      </div>

      <h2 className="font-medium text-ORANGE mb-1">{shortenText(title)}</h2>

      <h3 className="font-medium mb-2">{price} $</h3>

      <div className="flex justify-between items-center my-3">
        <Link to={`/Products/${id}`}>
          <TbListDetails className="icon" />
        </Link>

        <div>
          <TbShoppingBagCheck className="icon" />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
