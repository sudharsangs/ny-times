import React, { useEffect, useState } from "react";

const News = ({ search }) => {
  const query = search;
  const apiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=xrp7NPZMKRQ3U8nmHM5UMXu2XwBKYXei&sort=newest&begin_date=20110101`;

  return <div></div>;
};

export default News;
