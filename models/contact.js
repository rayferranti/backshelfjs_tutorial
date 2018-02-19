'use strict';
require('./friend');

const bookshelf = require('../bookshelf');

const Contact = bookshelf.Model.extend({
  tableName: 'contacts',
  friend: () => {
    return this.hasMany('Friend');
  }
});

module.exports = Contact;
