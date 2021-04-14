import { useEffect, useState } from "react";
import "./App.css";
import { getTopRatedNews } from './ApiClientService/items';

function App() {
  const [news,setNews] = useState([]);

  useEffect(() => {
    // Example call to the Hackernews API.
    // Feel free to delete
    // fetch("https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    getTopRatedNews()
      .then(news => setNews(news));
  }, []);
  console.log(news)

  return <div className="App">{
    news ? (
      news.map(item => 
        <div>{item}</div>
      )
    ) : (
      <div>Loading...</div>
    )
  }</div>;
}

export default App;
