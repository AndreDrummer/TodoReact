const mongoose = require('mongoose');
mongoose.Promise = global.Promise; // DECLARA QUE O MONGOOSE VAI USAR A PROMISE DO NODE. Serve para remover um warning do console.

module.exports = mongoose.connect('mongodb://localhost/todo')