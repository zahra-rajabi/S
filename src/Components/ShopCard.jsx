import React from "react";
import { shortenText } from "../helpers/helper";

function ShopCard({ item }) {
  let { image, title, price } = item;
  return (
    <div className="flex items-center justify-between px-4 py-2 border-2 border-dashed rounded-lg border-ORANGE bg-WHITE">
      <img src={image} alt={title} className="w-10 h-10" />
      <h2 className="font-medium text-BLUE">{shortenText(title)}</h2>
      <h2 className="font-medium text-ORANGE">{price} $</h2>
    </div>
  );
}

export default ShopCard;
