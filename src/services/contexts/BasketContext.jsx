import { createContext, useContext, useReducer } from "react";
import { sumProducts } from "../../helpers/helper";

const BasketContext = createContext();

const BasketStaus = {
  selectedItems: [],
  counter: 0,
  total: 0,
  checkOut: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }

      return {
        ...state,
        ...sumProducts(state.selectedItems),
        checkOut: false,
      };
    case "REMOVE_ITEM":
      state.selectedItems.find((item) => item.id === action.payload.id);
      return;
    case "INCREASE":
      console.log("add one another to basket");
      return;
    case "DECREASE":
      console.log("remove somthing from the basket");
      return;
    case "CHECKOUT":
      console.log("checkout");
      return;
    default:
      throw new Error("Invalid Action");
  }
};

function BasketProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, BasketStaus);
  console.log(state);
  return (
    <BasketContext.Provider value={{ state, dispatch }}>
      {children}
    </BasketContext.Provider>
  );
}

const useBasket = () => {
  const Basket = useContext(BasketContext);
  return Basket;
};

export { useBasket };
export default BasketProvider;
