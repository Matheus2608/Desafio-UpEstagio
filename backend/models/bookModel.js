const mongoose = require('mongoose')

const bookSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name value'],
    },
    author: {
      type: String,
      required: [true, 'Please add an author value'],
    },
    date: { 
      type: Date,
      required: [true, 'Please add a date value'],
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Book', bookSchema)
