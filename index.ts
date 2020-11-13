import * as express from 'express';
import * as cors from 'cors';
import { router as guessWordApi } from './src/guessWord/guessWordApi';

const app = express()
    .use(cors())
    .use('/guessWord', guessWordApi);

app.listen(4201, () => {
  return console.log('My Node App listening on port 4201');
});

