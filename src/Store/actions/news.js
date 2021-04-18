import { getTopRatedNews, getNewsByID } from '../../ApiClientService/items';
import { SET_NEWS, SET_NEWS_IDS, SET_LOADING } from './actionTypes';

export function fetchIDs() {
  return function (dispatch) {
    dispatch(setLoading(true));

    getTopRatedNews()
      .then((ids) => {
        dispatch(setNewsIDs(ids));
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  }
}
export function fetchNews(ids) {
  return function (dispatch) {
    ids.forEach((id) => {
      getNewsByID(id)
        .then((newsResponse) =>
          dispatch(setNews(newsResponse))
        )
    })
  }
}

const setNewsIDs = (ids) => {
  return {
    type: SET_NEWS_IDS,
    payload: ids,
  };
}
const setNews = (news) => {
  return {
    type: SET_NEWS,
    payload: news,
  };
}
const setLoading = (isLoading) => {
  return {
    type: SET_LOADING,
    payload: isLoading,
  };
}
