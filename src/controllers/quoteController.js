import mongoose from 'mongoose';
import { QuoteSchema } from '../models/quoteModel';

const Quote = mongoose.model('Quote', QuoteSchema);

export const addNewQuote = (req, res) => {
  let newQuote = new Quote(req.body);

  newQuote.save((err, quote) => {
    if (err) {
      res.send(err);
    }
    res.json(quote);
  });
};

export const getQuotes = (req, res) => {
  Quote.find({}, (err, quote) => {
    if (err) {
      res.send(err);
    }
    res.json(quote);
  });
};

export const getQuoteWithID = (req, res) => {
  Quote.findById(req.params.quoteId, (err, quote) => {
    if (err) {
      res.send(err);
    }
    res.json(quote);
  });
};

export const updateQuote = (req, res) => {
  Quote.findOneAndUpdate(
    { _id: req.params.quoteId },
    req.body,
    { new: true },
    (err, quote) => {
      if (err) {
        res.send(err);
      }
      res.json(quote);
    },
  );
};

export const deleteQuote = (req, res) => {
  Quote.remove({ _id: req.params.quoteId }, (err, quote) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Successfully deleted quote' });
  });
};

export const getRandomQuote = (req, res) => {
  // Get the count of all quotes
  Quote.count().exec(function(err, count) {
    // Get a random entry
    var random = Math.floor(Math.random() * count);

    // Again query all quotes but only fetch one offset by our random #
    Quote.findOne()
      .skip(random)
      .exec(function(err, quote) {
        // Tada! random user
        console.log(quote);
        res.json(quote);
      });
  });
};

export const quotePage = (req, res) => {
  // send the rendered view to the client
  Quote.count().exec(function(err, count) {
    // Get a random entry
    var random = Math.floor(Math.random() * count);

    // Again query all quotes but only fetch one offset by our random #
    Quote.findOne()
      .skip(random)
      .exec(function(err, quote) {
        // Tada! random user
        console.log(quote);
        res.render('home', quote);
      });
  });
};
