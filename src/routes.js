const {
  indexBooks,
  addBook,
  getBookById,
  updateBookById,
  deleteBookById,
} = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: () => 'Homepage',
  },
  {
    method: '*',
    path: '/',
    handler: () => 'Unhandled method for / path!',
  },
  {
    method: 'GET',
    path: '/books',
    handler: indexBooks,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookById,
  },
  {
    method: 'POST',
    path: '/books',
    handler: addBook,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: updateBookById,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookById,
  },
  {
    method: '*',
    path: '/{any*}',
    handler: () => 'Not Found!',
  },
];

module.exports = routes;
