import polka from 'polka';
import sirv from 'sirv';
import compression from 'compression';

import * as sapper from '@sapper/server';

let { PORT, NODE_ENV } = process.env;
let dev = NODE_ENV === 'development';


export default polka()
  .use(compression({ threshold: 0 }))
  .use(sirv('static', { dev }))
  .use(sapper.middleware())
  .listen(PORT, (err) => {
    if (err) console.error(err);
  });
