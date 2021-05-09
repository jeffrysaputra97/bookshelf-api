const {
  indexBooks,
  addBook,
  getBookById,
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
    method: '*',
    path: '/{any*}',
    handler: () => 'Not Found!',
  },
];

module.exports = routes;
