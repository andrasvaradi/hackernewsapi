import './NewsItem.css';
import { timePassed, trimUrl } from './HelperFunctions';

export const NewsItem = ({item, number}) => {
  return (
    <div className="news-item">
      <h2 className="news-title"><a href={item.url}>{number+1}. {item.title} <span className="news-url">({item.url ? trimUrl(item.url) : null})</span></a></h2>
      <h3 className="news-info">{item.score} points by {item.by} {timePassed(item.time * 1000)} </h3>
    </div>
  )
}