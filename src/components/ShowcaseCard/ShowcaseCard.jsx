import React from "react";
import CardFilterChip from "../CardFilterChip/CardFilterChip";
import "./ShowcaseCard.css";

const filters = [
  {
    id: 1,
    name: "Favourite",
    color: "pink",
  },
  {
    id: 1,
    name: "Open Source",
    color: "red",
  },
  {
    id: 1,
    name: "Product",
    color: "green",
  },
  {
    id: 1,
    name: "Design",
    color: "blue",
  },
];

function ShowcaseCards({ user }) {
  return (
    <div className="showcase-card-wrapper">
      <img
        src={user.preview}
        alt="Project Thumbnail"
        className="showcase-card-thumbnail"
      />
      <div className="showcase-card-header">
        <h4 className="showcase-card-heading">{user.title}</h4>
        <div>
          <span className="showcase-card-icon">Heart Icon</span>
          <button className="source-btn">Source</button>
        </div>
      </div>
      <p className="showcase-card-desc">{user.description}</p>
      <div className="showcase-card-footer">
        {filters.map((filter) => (
          <CardFilterChip key={filter.id} filter={filter} />
        ))}
      </div>
    </div>
  );
}

export default ShowcaseCards;
