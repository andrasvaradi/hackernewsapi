const BASE_URL = 'https://hacker-news.firebaseio.com/v0/'

function fetchRequest(path, options) {
  const url = `${BASE_URL}${path}.json`;
  return fetch(url, options)
    .then(res => res.ok ? res : Promise.reject())
    .then(response => response.json())
    .catch(err => {
      console.log(`Error fetching ${url}: `, err)
    })
}

export { fetchRequest };
