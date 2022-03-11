import React, { useEffect, useState } from "react";
import originalArticles from "./components/data/articles.json";
import Table from "./components/common/Table";
import SearchBar from "./components/common/SearchBar";

function App() {
  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = () => {
    const data = originalArticles;
    setArticles(data);
  };

  const handleSearch = (data) => {
    setSearch(data);
    console.log(data);
    if (!data) {
      loadArticles();
    }
    const searchedArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(data.toLowerCase())
    );
    setArticles(searchedArticles);
    return articles;
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

  return (
    <>
      <SearchBar value={search} onChange={handleSearch} />
      <Table columns={columns} data={articles} />
    </>
  );
}

export default App;
