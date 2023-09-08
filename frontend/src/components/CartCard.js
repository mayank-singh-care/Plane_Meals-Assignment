import React from "react";
import { changeMealQty, deleteMeals } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import "./Cart.css";

function CartCard({ item, passenger }) {
  const dispatch = useDispatch();

  const getMealTotal = () => {
    let total = item.price * item.quantity;
    total += item.drinks?.reduce((sum, drink) => sum + drink.price, 0);
    return total;
  };

  return (
    <div className="cartCard">
      <img src={item.img} alt="cartItem" height="100px" width="100px" />
      <div>
        <h3>{item.title}</h3>
        <ul className="cartDrinks">
          Drinks:-{" "}
          {item.drinks?.map((drink) => (
            <li key={drink.id}>{drink.title}</li>
          ))}
        </ul>
        <span style={{ display: "flex", gap: "10px" }}>
          Price:-<b>${getMealTotal().toFixed(2)}</b>
          Qty:-{" "}
          <select
            name="qty"
            value={item.quantity}
            onChange={(e) =>
              dispatch(
                changeMealQty({
                  passenger: passenger,
                  mealId: item.id,
                  mealQty: +e.target.value,
                })
              )
            }>
            {Array.from({ length: 10 }, (v, k) => (
              <option key={k + 1} value={k + 1}>
                {k + 1}
              </option>
            ))}
          </select>
        </span>
        <Button
          variant="outlined"
          onClick={() =>
            dispatch(deleteMeals({ passenger: passenger, mealId: item.id }))
          }>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default CartCard;
