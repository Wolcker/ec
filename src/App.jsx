import React, { useState } from "react";
import articles from "./articles.json";
import Table from "./components/common/Table";
import SearchBar from "./components/common/SearchBar";

function App() {
  const [search, setSearch] = useState("");

  const handleSeach = (Query) => {
    setSearch(Query);
  };

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

  const searchedArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <SearchBar value={search} onChange={handleSeach} />
      <Table columns={columns} data={searchedArticles} />
    </>
  );
}

export default App;
