const jwt = require('jsonwebtoken');

//jwt.sign
//jwt.verify

const data = {
    id: 10
}

const token = jwt.sign(data, '123abc');

console.log(token);

const decoded = jwt.verify(token, '123abc');

console.log(decoded);