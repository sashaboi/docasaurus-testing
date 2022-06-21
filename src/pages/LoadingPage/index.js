import React from "react";
import Layout from "@theme/Layout";
import { uuid as v4 } from "uuid";
import "./showcase.css";
export default function index() {
  const listofThingstoMap = [
    {
      name: "Onkar",
      surname: "Deshpande",
      link: "facebook.com",
      github: "sashaboi",
    },
    {
      name: "Onkar",
      surname: "Deshpande",
      link: "facebook.com",
      github: "sashaboi",
    },
    {
      name: "Onkar",
      surname: "Deshpande",
      link: "facebook.com",
      github: "sashaboi",
    },
    {
      name: "Onkar",
      surname: "Deshpande",
      link: "facebook.com",
      github: "sashaboi",
    },
    {
      name: "Onkar",
      surname: "Deshpande",
      link: "facebook.com",
      github: "sashaboi",
    },
  ];
  return (
    <Layout>
      <h1>Demo Showcase Page</h1>
      <p>Here's our bois</p>

      <div className="card-container">
        {listofThingstoMap.map((card) => (
          <div className="user-card">
            <div className="user-name">
              {card.name}
              {card.surname}
            </div>
            <a href={card.link}>{card.name}'s website's live link</a>
            <br></br>
            <a href={card.github}>{card.name}'s Github</a>
          </div>
        ))}
      </div>
    </Layout>
  );
}
