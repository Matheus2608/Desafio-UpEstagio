const asyncHandler = require('express-async-handler')

const Book = require('../models/bookModel')

// @desc    Get books
// @route   GET /api/books
// @access  Private
const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find()
  res.status(200).json(books)
})

// @desc    Set book
// @route   POST /api/books
// @access  Private
const setBook = asyncHandler(async (req, res) => {
  // if (!req.body.name || !req.body.author || !req.body.date) {
  //   res.status(400)
  //   throw new Error('Please insert all fields')
  // }

  if (!req.body.date instanceof Date){
    res.status(400)
    throw new Error('This is not a valid date')
  }

  const book = await Book.create({
    name: req.body.name,
    author: req.body.author,
    date: req.body.date,
  })

  res.status(200).json(book)
})

// @desc    Update book
// @route   PUT /api/books/:id
// @access  Private
const updateBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id)

  if (!book) {
    res.status(400)
    throw new Error('book not found')
  }

  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedBook)
})

// @desc    Delete book
// @route   DELETE /api/books/:id
// @access  Private
const deleteBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id)

  if (!book) {
    res.status(400)
    throw new Error('book not found')
  }

  await book.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getBooks,
  setBook,
  updateBook,
  deleteBook,
}
