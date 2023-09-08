import React from "react";
import "./FilterTags.css";
import Chip from "@mui/material/Chip";
import useFetch from "../utils/useFetch";

function FilterTags({ filters, setFilters }) {
  const url = "http://localhost:8080/labels";
  const { data, loading } = useFetch(url);

  const handleSelect = (tagId) => {
    setFilters(tagId);
  };
  
  return (
    <div className="filters">
      <Chip
        label="All"
        variant="outlined"
        color={filters === "all" ? "primary" : "default"}
        onClick={() => handleSelect("all")}
      />
      {!loading &&
        data?.map((tag) => (
          <Chip
            key={tag.id}
            label={tag.label}
            variant="outlined"
            color={filters === tag.id ? "primary" : "default"}
            onClick={() => handleSelect(tag.id)}
          />
        ))}
    </div>
  );
}

export default FilterTags;
