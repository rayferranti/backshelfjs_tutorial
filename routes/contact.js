'use strict';

const express = require('express');

const Contact = require('../models/contact');

const router = express.Router();

router.route('/')
  .get((req, res) => {
    Contact.fetchAll().then((contacts) => {
      res.json({ contacts });
    });
  })
  .post((req, res) => {
    new Contact({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      emailAddress: req.body.emailAddress,
    }).save().then((savedContact) => {
        res.json({ savedContact });
      });
  });

router.route('/:id')
  .put((req,res) => {
    Contact
      .where('id', req.params.id)
      .fetch()
      .then((foundContact) => {
        foundContact.save({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          emailAddress: req.body.emailAddress
        })
        .then((updatedContact) => {
          res.send({updatedContact})
        });
      });
  })
  .delete((req, res) => {
    Contact
      .where('id', req.params.id)
      .destroy()
      .then((deletedContact) => {
        res.json({ deletedContact });
      });
  })


module.exports = router;
