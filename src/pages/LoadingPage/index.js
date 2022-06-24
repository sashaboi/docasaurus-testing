import React from "react";
import Layout from "@theme/Layout";
import { uuid as v4 } from "uuid";
import "./showcase.css";
export default function index() {
  const listofThingstoMap = [
    {
      name: "Kuldeep",
      surname: "kuldeep",
      link: "kuleep.com",
      github: "kuldeep",
    },
    {
      name: "Darshan",
      surname: "Damre",
      link: "darshan.com",
      github: "darshan",
    },
    {
      name: "Tushar",
      surname: "Deshpande",
      link: "facebook.com",
      github: "sashaboi",
    },
    {
      name: "Chinmay",
      surname: "Manas",
      link: "chinmay.com",
      github: "chinmay",
    },
    {
      name: "Kuldeep",
      surname: "Deshpande",
      link: "facebook.com",
      github: "sashaboi",
    },
    {
      name: "Bhavya",
      surname: "Deshpande",
      link: "facebook.com",
      github: "sashaboi",
    },
    {
      name: "Vikrant",
      surname: "Deshpande",
      link: "facebook.com",
      github: "sashaboi",
    },
    {
      name: "Ravi",
      surname: "Deshpande",
      link: "facebook.com",
      github: "sashaboi",
    },
     {
      name: "Chirag",
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
