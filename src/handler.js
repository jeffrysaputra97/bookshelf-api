const { nanoid } = require('nanoid');
const books = require('./books');

const indexBooks = (_, h) => {
  const result = books.map((item) => {
    const book = {
      id: item.id,
      name: item.name,
      publisher: item.publisher,
    };

    return book;
  });

  const response = h.response({
    status: 'success',
    data: {
      books: result,
    },
  });

  response.code(200);
  return response;
};

const addBook = (request, h) => {
  const {
    name, year, author, summary, publisher, pageCount, readPage, reading,
  } = request.payload;

  // Validation phase
  if (!name) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku',
    });

    response.code(400);
    return response;
  }

  if (readPage > pageCount) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
    });

    response.code(400);
    return response;
  }

  const id = nanoid(16);
  const finished = pageCount === readPage;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const book = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };

  books.push(book);

  const isSuccess = books.filter((note) => note.id === id).length > 0;

  if (isSuccess) {
    console.log(`Current books record length: ${books.length}`);
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: {
        bookId: id,
      },
    });

    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'error',
    message: 'Failed to add new record!',
  });

  response.code(500);
  return response;
};

const getBookById = (request, h) => {
  const { id } = request.params;

  const book = books.filter((item) => item.id === id)[0];

  if (!book) {
    const response = h.response({
      status: 'fail',
      message: 'Buku tidak ditemukan',
    });

    response.code(404);
    return response;
  }

  return {
    status: 'success',
    data: {
      book,
    },
  };
};

module.exports = {
  indexBooks,
  addBook,
  getBookById,
};
