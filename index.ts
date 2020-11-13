import * as express from 'express';

const app = express();

app.listen(4201, () => {
  return console.log('My Node App listening on port 4201');
});