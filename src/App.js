import React, { useState } from "react";
import Menu from "./components/Menu";
import SearchBar from "./components/SearchBar";
import Home from "./components/Home";
import Chart from "./components/Chart";
import News from "./components/News";
import axios from "axios";
import "./App.css";

function App() {
  const [term, setTerm] = useState("");
  const [news, setNews] = useState([]);
  const [yCount, setYcount] = useState([]);
  const query = term;
  const apiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=xrp7NPZMKRQ3U8nmHM5UMXu2XwBKYXei&sort=newest&begin_date=20110101`;
  const yearCount = `${apiUrl}&fl=pub_date`;

  const fetchNews = async (e) => {
    e.preventDefault();
    const response = await axios.get(apiUrl);
    const year = await axios.get(yearCount);
    console.log(year.data.response.docs);
    setNews(response.data.response.docs);
    console.log(news);
  };

  const search = async (e) => {
    if (e.key === "Enter") {
      const response = await axios.get(apiUrl);
      const year = await axios.get(yearCount);
      console.log(year.data.docs);
      setNews(response.data.response.docs);
      console.log(news);
    }
  };
  const handleInput = (e) => {
    let sea = e.target.value;
    setTerm(sea);
  };

  return (
    <div className="App">
      <div className="menu">
        <Menu />
      </div>
      <div className="main">
        <SearchBar
          handleInput={handleInput}
          fetch={fetchNews}
          search={search}
        />
        {news.length ? (
          <div>
            <News news={news} term={term} />
            <Chart year={yCount} />
          </div>
        ) : (
          <Home />
        )}
      </div>
    </div>
  );
}

export default App;
