const {
  indexBooks,
  addBook,
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
