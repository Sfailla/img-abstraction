const connection = `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`;
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;


module.database = mongoose.connect(connection, {
    useMongoClient: true
});