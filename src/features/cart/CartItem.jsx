import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdtaeItemQuantity from "./UpdtaeItemQuantity";
import { getCurruntQuantityById } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;


  const currentQuantity = useSelector(getCurruntQuantityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between sm:gap-6 items-center">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <UpdtaeItemQuantity pizzaId={pizzaId} currentQuantity={currentQuantity} />
        <DeleteItem pizzaId={pizzaId} />

      </div>
    </li>
  );
}

export default CartItem;
