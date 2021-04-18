const timeUnits = new Map();
timeUnits.set('year', 3.1556926e10);
timeUnits.set('month', 2.62974383e9);
timeUnits.set('week', 6048e5);
timeUnits.set('day', 864e5);
timeUnits.set('hour', 36e5);
timeUnits.set('min', 6e4);

export function timePassed(timeStamp) {
  const deltaTime = Date.now() - timeStamp;
  for (let [key, value] of timeUnits) {
    let amount = Math.floor(deltaTime / value);
    if (amount >= 1) {
      let plural = amount > 1 ? 's' : '';
      return `${amount} ${key}${plural} ago`;
    }
  }
  return 'now';
}

export function trimUrl(url) {
  const { hostname } = new URL(url);
  return hostname;
}

export const sorting = () => {
  
}