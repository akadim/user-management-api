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
  return res.send(Object.values(users));
});

/* GET a single user. */
router.get('/:id', function(req, res, next) {
  let id = parseInt(req.params.id);

  const user = users.find((user) => user.id === id);

  return res.end(JSON.stringify(user));
});

router.put('/', function(req, res, next) {

    users = users.map( (user) => {
         if(user.id === parseInt(req.body.id)) {
            user.firstname = req.body.firstname;
            user.lastname = req.body.lastname;
            user.email = req.body.email;
            user.age = req.body.age;
         }

         return user;
    });

    return res.status(200).send({"message": "updated"});
});

router.post('/', function(req, res, next) {
    users.push({
       id: ( (users.length === 0) ? 1 : parseInt(users[users.length-1].id) + 1),
       firstname: req.body.firstname,
       lastname: req.body.lastname,
       email: req.body.email,
       age: req.body.age
    });

    return res.status(200).send({"message": "added"});
});

module.exports = router;
