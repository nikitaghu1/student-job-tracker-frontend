import React from "react";

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="filter-buttons">
      {["All", "Applied", "Interview", "Offer", "Rejected"].map((status) => (
        <button
          key={status}
          onClick={() => setFilter(status)}
          className={`px-3 py-1 rounded ${filter === status ? "active" : ""}`}
        >
          {status}
        </button>
      ))}
    </div>
  );
};

export default Filter;
