import React, { useEffect, useState } from "react";
import axios from "axios";

function Articles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
  axios.get('http://localhost:3000/articles')
  .then(response => {
    response.to_json();
    setArticles(response.data)
    console.log(articles);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  }
  )
 
  return (
    <div>
      <h1>Articles List</h1>
      <ul>
        {articles.map(article =>(
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
      <a href="/users">See all authors</a>
        </div>
  );
}

export default Articles