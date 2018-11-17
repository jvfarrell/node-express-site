import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/quoteRoutes';
import creds from './src/resources/creds';
//const creds = require('.src/resources/creds');

const app = express();
const PORT = 3001;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb://'+creds.USERNAME+':'+creds.PASS+'@ds163836.mlab.com:63836/quote_db',
  {
    useMongoClient: true,
  },
);

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get(
  '/',
  (req, res) => res.render('home'),
  //res.send(`Node and express server is running on port ${PORT}`),
);

app.listen(PORT, () => console.log(`your server is running on port ${PORT}`));
