const mongoose = require('mongoose');

// MongoDb connect
// because we are on Docker we will user mongodb://mongo instead mongodb://localhost
// the name of mongo container
mongoose
.connect('mongodb://mongo:27017/nodejs-docker', { useNewUrlParser: true })
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));


const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);
