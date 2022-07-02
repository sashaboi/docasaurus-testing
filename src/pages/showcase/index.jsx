import React from "react";
import Translate, { translate } from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import { users } from "../../data/users";
import ShowcaseCard from "../../components/ShowcaseCard/ShowcaseCard";
import "./showcase.css";
import FilterChip from "../../components/FilterChip/FilterChip";

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

const ShowcaseHeader = () => {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <h1>Mockbee Showcase</h1>
      <p>List of projetcs people are building with Mockbee</p>
      <a
        className="button button--primary"
        href="https://github.com/sashaboi/docasaurus-testing/edit/master/src/data/users.jsx"
        target="_blank"
        rel="noreferrer"
      >
        <Translate id="showcase.header.button">
          🙏 Please add your site
        </Translate>
      </a>
    </section>
  );
};

function ShowcaseFilters() {
  return (
    <section className="container margin-top--l margin-bottom--lg">
      <div className="margin-bottom--sm">
        <div>
          <h2>
            <Translate id="showcase.filters.title">Filters</Translate>
          </h2>
        </div>
      </div>
      <ul className="clean-list filter-container">
        {filters.map((filter) => (
          <FilterChip key={filter.id} filter={filter} />
        ))}
      </ul>
    </section>
  );
}

function ShowcaseCards() {
  return (
    <div className="showcase-cards-container container margin-top--l margin-bottom--lg">
      {users.map((user) => (
        <ShowcaseCard user={user} />
      ))}
    </div>
  );
}

export default function Showcase() {
  return (
    <Layout>
      <ShowcaseHeader />
      <ShowcaseFilters />
      <ShowcaseCards />
    </Layout>
  );
}
