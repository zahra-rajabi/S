import { GrAttachment } from "react-icons/gr";
import { IoArrowBackOutline, IoPricetagsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function DetailsCard({ product }) {
  const { image, title, description, category, price } = product;
  return (
    <section className="flex justify-between gap-8">
      <div className="flex items-center justify-center w-1/3 border-2 border-dashed rounded-lg border-BLUE h-96 bg-WHITE">
        <img src={image} alt={title} className="w-1/2 h-2/3 " />
      </div>
      <div className="flex flex-col w-2/3 px-8 py-4 border-2 border-dashed rounded-lg h-max border-ORANGE">
        <h2 className="mb-8 text-2xl font-bold text-BLUE">{title}</h2>
        <h3 className="w-3/4 mb-8 text-lg text-TEXT_GRAY">{description}</h3>
        <h2 className="flex items-center gap-1 font-medium text-ORANGE">
          <GrAttachment />
          <span>{category}</span>
        </h2>
        <div className="flex items-center justify-between mt-10 justify-self-end">
          <div className="flex items-center gap-2 text-lg font-bold">
            <IoPricetagsOutline />
            <span>{price} $</span>
          </div>
          <Link
            to="/products"
            className="flex items-center gap-1 px-4 py-2 text-white rounded-lg bg-BLUE hover:bg-BLUE/95"
          >
            <IoArrowBackOutline />
            <span>back to shop</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DetailsCard;
