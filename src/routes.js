const { addNoteHandler } = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: () => {
      console.log('Homepage');
      return 'Homepage';
    },
  },
  {
    method: '*',
    path: '/',
    handler: () => 'Unhandled method for / path!',
  },
  {
    method: 'GET',
    path: '/about',
    handler: () => 'About',
  },
  {
    method: '*',
    path: '/about',
    handler: () => 'Unhandled method for /about path!',
  },
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: '*',
    path: '/{any*}',
    handler: () => 'Not Found!',
  },
];

module.exports = routes;
