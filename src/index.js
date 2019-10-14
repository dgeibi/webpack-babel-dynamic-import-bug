import getLangKey from './getLangKey';

const getQuery = function(variable, search = window.location.search) {
  const query = search.substring(1);
  const vars = query.split('&');
  let val = false;
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    if (pair[0] === variable) {
      val = pair[1];
    }
  }
  return val;
};

const langCode = getQuery('lang');

import(`./lang/${getLangKey(langCode)}`).then(x => {
  console.log(x);
});
