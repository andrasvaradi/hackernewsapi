import { fetchRequest } from './fetchRequest';

const getTopRatedNews = () => {
  const path = 'topstories';
  return fetchRequest(path)
};
const getNewsByID = (id) => {
  const path = `item/${id}`;
  return fetchRequest(path);
}

export { getTopRatedNews, getNewsByID };