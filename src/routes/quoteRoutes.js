import {
  addNewQuote,
  getQuotes,
  getQuoteWithID,
  updateQuote,
  deleteQuote,
  getRandomQuote,
  quotePage,
} from '../controllers/quoteController';

const routes = app => {
  app
    .route('/quote')
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getQuotes)

    // POST endpoint
    .post(addNewQuote);

  app
    .route('/quote/byId/:quoteId')
    // get specific quote
    .get(getQuoteWithID)

    // put request
    .put(updateQuote)

    // delete request
    .delete(deleteQuote);

  app
    .route('/quote/random')
    // get a random quote
    .get(getRandomQuote);

  app
    .route('/testing')
    // get test index.html
    .get(quotePage);

  app
    .route('/')
    // get test index.html
    .get(quotePage);
};

export default routes;
