import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchIDs, fetchNews } from './Store/actions/news'

function App() {
  const dispatch = useDispatch();
  const newsIDS = useSelector(state => state.newsIDs);
  const news = useSelector(state => state.news);
  const loadCount = useSelector(state => state.loadCount);

  useEffect(() => {
    if(!newsIDS.length) {
      const loadIDS = () => {
        const action = fetchIDs()
        dispatch(action);
      }
      loadIDS()
    }
  }, []);
  useEffect(() => {
    const loadNews = async () => {
      const action = fetchNews(newsIDS.slice(loadCount,loadCount+30))
      dispatch(action);
    }
    loadNews()
  }, [newsIDS])

  const handleClick = (e) => {
    e.preventDefault();
    const action = fetchNews(newsIDS.slice(loadCount,loadCount+30))
    dispatch(action);
  }

  return (
    <div className="App">
      <div>
        <div>Hacker News</div>
        {!news ?
        (
          <div>Loading...</div>
        )
        : (
          <>
          {
            news.map(item =>
            <div className="news-item" id={item.id}>
              <div>{item.title}</div>
              <div>{item.by}</div>
              <div>{item.url}</div>
            </div>
            )
          }
          <button onClick={handleClick}>MORE</button>
          </>
        )
        }
      </div>
    </div>
  )
}

export default App;
