/* eslint-disable default-case */
import { SET_NEWS, SET_NEWS_IDS, SET_LOADING, SET_LOADCOUNT } from '../actions/actionTypes';
const initialState = {
  newsIDs: [],
  news: [],
  loadCount: 0,
  isLoading: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_NEWS_IDS:
      return { ...state, newsIDs: action.payload };
    case SET_NEWS:
      return { ...state, news: [...state.news,action.payload], loadCount: state.loadCount + 1 };
    case SET_LOADING:
      return { ...state, isLoading: action.payload };
  }
  return state;
}

export default reducer;
