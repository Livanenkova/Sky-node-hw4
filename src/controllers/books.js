const Book = require("../models/book");

// Получем все книги пользователя из БД
const getBooks = (req, res) => {
    const { id } = req.params;
    return Book.findById(id).then((books) => {
      res.status(200).send(books);
    });
};

// Получем книгу пользователя по ID
const getBook = (req, res) => {
  const { id_book } = req.params;
  return Book.findById(id_book).then((book) => {
    res.status(200).send(book);
  });
};

// Добавляем книгу
const createBook = (req, res) => {
    return Book.create({ ...req.body }).then((book) => {
    res.status(201).send(book);
  });
};

// Обновляем книгу
const updateBook = (req, res, next) => {
  const { id_book } = req.params;
  Book.findByIdAndUpdate(id_book, { ...req.body })
    .then((Book) => {
      res.status(200).send(book);
    })
    .catch((e) => {
      res.status(500);
    });
};

// Удаляем книгу
const deleteBook = (req, res, next) => {
  const { id_book } = req.params;
  User.deleteOne({ _id: id_book })
    .then((dbResponse) => {
      res.status(200).send(dbResponse);
    })
    .catch((e) => {
      res.status(500);
    });
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};