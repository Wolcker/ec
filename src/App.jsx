import React, { useState } from "react";
import articles from "./articles.json";
import Table from "./components/common/Table";
import SearchBar from "./components/common/SearchBar";

function App() {
  const [search, setSearch] = useState("");

  const handleSeach = (Query) => {
    // Adds what you type in search to search state.
    setSearch(Query);
  };

  // Colums builds the table stucture. You can show less or add more paths in the columns.
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
      label: "Category",
      path: "category",
    },
  ];

  //Filters the articles by the search word you are typing
  const searchedArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  // Both Table and SearchBar are common components and easly reusable.
  return (
    <>
      <SearchBar value={search} onChange={handleSeach} />
      <Table columns={columns} data={searchedArticles} />
    </>
  );
}

export default App;
