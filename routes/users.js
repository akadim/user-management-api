var express = require('express');
var router = express.Router();

var users = [
  {
    id: 1,
    firstname: 'Phoenix',
    lastname: 'Wright',
    email: 'phoenix.wright@attorney.com',
    age: 24
  },
  {
    id: 2,
    firstname: 'Miles',
    lastname: 'Edgeworth',
    email: 'miles.edgeworth@prosecutor.com',
    age: 25
  },
  {
    id: 3,
    firstname: 'Franziska',
    lastname: 'Von Karma',
    email: 'franziska.von.karma@attorney.com',
    age: 28
  },
  {
    id: 4,
    firstname: 'Mia',
    lastname: 'Fey',
    email: 'mia.fey@attorney.com',
    age: 35
  },
  {
    id: 5,
    firstname: 'Apollo',
    lastname: 'Justice',
    email: 'apollo.justice@attorney.com',
    age: 19
  }
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(Object.values(users));
});

module.exports = router;
