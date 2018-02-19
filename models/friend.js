'use strice';
require('./contact');

const bookshelf = require('../bookshelf');

const Friend = bookshelf.model.extend({
  tableName: 'friends',
  contact: () => {
    return this.belongsTo('Contact')
  }
});

module.exports = Friend;
