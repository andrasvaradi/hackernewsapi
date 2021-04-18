import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchIDs, fetchNews } from './Store/actions/news'
import { NewsItem } from './NewsItem';
import Box from '@material-ui/core/Box';
import { Title } from './Title';
import { Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';

function App() {
  const [sortBy, setSortBy] = useState('score');

  const dispatch = useDispatch();
  const newsIDS = useSelector(state => state.newsIDs);
  const news = useSelector(state => state.news);
  const loadCount = useSelector(state => state.loadCount);

  useEffect(() => {
    if (!newsIDS.length) {
      const loadIDS = () => {
        const action = fetchIDs()
        dispatch(action);
      }
      loadIDS()
    }
  }, []);
  useEffect(() => {
    const loadNews = async () => {
      const action = fetchNews(newsIDS.slice(loadCount, loadCount + 30))
      dispatch(action);
    }
    loadNews()
  }, [newsIDS])

  const handleClick = (e) => {
    e.preventDefault();
    const action = fetchNews(newsIDS.slice(loadCount, loadCount + 30))
    dispatch(action);
  }

  return (
    <Box margin="5%">

      <Title />

      <Box
        className="news-list"
        display="flex"
        flexDirection="column"
        alignItems="start"
        minWidth={400}
        width='100%'
      >
        <Box
          className="sort-box"
          display="flex"
          marginTop={2}
          flexGrow={1}
          minWidth={250}
          justifyContent="space-between"
        >
          <Typography margin={8} >
            Sort by:
          </Typography>
          <Button onClick={() => setSortBy('score')} variant="outlined" size="small" color="inherit">
              Popularity
          </Button>
          <Button onClick={() => setSortBy('time')} variant="outlined" size="small" color="inherit">
              Date
          </Button>
        </Box>
        {!news ?
          (
            <div>Loading...</div>
          )
          : (
            <>
              {
                news
                  .sort((a, b) => {
                    if (sortBy === 'score') return a.score < b.score ? 1 : -1
                    else return a.time < b.time ? 1 : -1
                  })
                  .map((item, i) =>
                    <NewsItem item={item} id={item.id} number={i} />

                  )
              }
              <Button onClick={handleClick} variant="outlined" size="small" color="inherit">
                MORE
              </Button>
            </>
          )
        }
      </Box>
    </Box>
  )
}

export default App;
