import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const QuoteSchema = new Schema({
  quoteText: {
    type: String,
    required: 'Enter the quote',
  },
  source: {
    type: String,
    required: 'Enter the quote source',
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});
