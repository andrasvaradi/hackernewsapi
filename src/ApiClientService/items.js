import { fetchRequest } from './fetchRequest';

const getTopRatedNews = () => {
  const path = 'topstories';
  return fetchRequest(path)
};

export { getTopRatedNews };