import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurruntQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdtaeItemQuantity from "../cart/UpdtaeItemQuantity";

function MenuItem({ pizza }) {

  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;


  const currentQuantity = useSelector(getCurruntQuantityById(id));

  const isInCart = currentQuantity > 0;


  function handleAddToCart() {
    const item = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice
    }

    dispatch(addItem(item));

  }

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex flex-col justify-between grow pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-small italic text-stone-500 capitalize ">{ingredients.join(', ')}</p>

        <div className="mt-auto  flex justify-between items-center">

          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className="text-sm uppercase font-medium text-stone-500">Sold out</p>}

          {!soldOut &&  !isInCart && <Button type='small' onClick={handleAddToCart}>Add to Cart</Button>}

          {isInCart && <div className="flex items-center gap-4">
          
            <UpdtaeItemQuantity pizzaId={id} currentQuantity={currentQuantity} />
            <DeleteItem pizzaId={id} />

          
          </div>}


        </div>
      </div>
    </li>
  );
}

export default MenuItem;
