import React from "react";
import Button from "@mui/material/Button";
import "./Meal.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleDrinks, addMeals } from "../redux/cartSlice";
import redVine from "../images/redVine.jpg";
import orangeJuice from "../images/orangeJuice.jpg";
import greenBeer from "../images/greenBeer.jpg";

const drinkImgs = [redVine, orangeJuice, greenBeer];

function MealCard({ meal }) {
  const { cartItems, selectedPassenger } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const isDrinkActive = (mealId, drinkId) => {
    let mealObj = cartItems[selectedPassenger].find(
      (meal) => meal.id === mealId
    );
    if (mealObj) {
      let drinkObj = mealObj.drinks.find((drink) => drink.id === drinkId);
      return drinkObj ? true : false;
    }
    return false;
  };

  return (
    <div key={meal.id} className="meal">
      <img src={meal.img} alt="MealImg" className="mealImg" />
      <div className="mealDetails">
        <p>{`${meal.title} + drink`}</p>
        <h2 className="mealTitle">{meal.title}</h2>
        <p>
          <b>Starter: </b>
          {meal.starter}
        </p>
        <p>
          <b>Desert: </b>
          {meal.desert}
        </p>
        <p>
          <b>Selected Drink: </b>
          {}
        </p>
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            marginTop: "20px",
          }}>
          <div className="drinks">
            {meal.drinks.map((drink, i) => (
              <button
                key={drink.id}
                // disabled={!isDrinkActive(meal.id, drink.id)}
                className={`drink ${
                  isDrinkActive(meal.id, drink.id)
                    ? "activeDrink"
                    : "unactiveDrink"
                }`}
                onClick={() => {
                  dispatch(
                    toggleDrinks({
                      passenger: selectedPassenger,
                      mealId: meal.id,
                      drink: drink,
                    })
                  );
                }}>
                <img
                  src={drinkImgs[i]}
                  alt="drinkImg"
                  height="70px"
                  width="70px"
                />
              </button>
            ))}
          </div>
          <div>
            <h4 style={{ margin: "0 0 5px" }}>$ {meal.price}</h4>
            <Button
              variant="outlined"
              onClick={() => {
                dispatch(
                  addMeals({
                    passenger: selectedPassenger,
                    meal: {
                      id: meal.id,
                      title: meal.title,
                      img: meal.img,
                      price: meal.price,
                      quantity: 1,
                      drinks: [],
                    },
                  })
                );
              }}>
              Select
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealCard;
