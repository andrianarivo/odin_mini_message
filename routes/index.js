const express = require('express');

const router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { layout: 'layout', title: 'Mini Messageboard', messages });
});

/* GET new page. */
router.get('/new', (req, res) => {
  res.render('new', { layout: 'layout', title: 'Adding a new message' });
});

router.post('/new', (req, res) => {
  messages.push({ added: new Date(), user: req.body.user, text: req.body.message });
  res.redirect('/');
});

module.exports = router;
