import React, { useEffect, useState } from "react";
import useFetch from "../utils/useFetch";
import MealCard from "./MealCard";
import Pagination from "@mui/material/Pagination";
import CircularProgress from "@mui/material/CircularProgress";
import "./Meal.css";

function MealsList({ filters }) {
  const [page, setPage] = useState(1);
  const url = `http://localhost:8080/meals?page=${page}&limit=3&tag=${filters}`;
  const { data, loading } = useFetch(url);
  console.log(data);
  const [mealsList, setMealsList] = useState(data?.results || []);

  useEffect(() => {
    setMealsList(data.results);
  }, [filters, data]);

  return (
    <div>
      {loading ? (
        <>
          <h1>Loading</h1>
          <CircularProgress />
        </>
      ) : (
        <>
          {mealsList?.map((meal, i) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
          <Pagination
            className="pagination"
            count={Math.ceil((data?.totalMeals ?? 9) / 3)}
            page={page}
            variant="outlined"
            color="primary"
            onChange={(e, num) => setPage(num)}
          />
        </>
      )}
    </div>
  );
}

export default MealsList;
