import React from "react";
import articles from "./components/data/articles.json";
import Table from "./components/common/Table";

function app() {
  console.log(articles);

  const columns = [
    {
      label: "Title",
      path: "title",
    },
    {
      label: "Descrption",
      path: "description",
    },
    {
      label: "Price",
      path: "price",
    },
    {
      label: "Campaign",
      path: "price_campaign",
    },
    {
      label: "Link",
      path: "url",
    },
    {
      label: "Category",
      path: "category",
    },
  ];

  return <Table columns={columns} data={articles} />;
}

export default app;
