import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchIDs, fetchNews } from './Store/actions/news'
import { NewsItem } from './NewsItem';
import Box from '@material-ui/core/Box';
import { Title } from './Title';

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
    <Box margin="5%">

      <Title />

      <Box
        display="flex"
        flexDirection="column"
        alignItems="start"
        minWidth={400}
        width='100%'
      >
        {!news ?
        (
          <div>Loading...</div>
        )
        : (
          <>
          {
            news
              .sort((a,b) => a.score < b.score ? 1 : -1)
              .map((item, i) =>
              <NewsItem item={item} id={item.id} number={i} />

            )
          }
          <button onClick={handleClick}>MORE</button>
          </>
        )
        }
      </Box>
    </Box>
  )
}

export default App;
