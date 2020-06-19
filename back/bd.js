const mongoose = require('mongoose')
const URI = 'mongodb+srv://Tom:987654vas@cluster0-hzwhs.mongodb.net/Registration?retryWrites=true&w=majority'

mongoose.set('useFindAndModify', false);

const connectDB = async () => {
    await mongoose.connect(URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }).then(
        () => {console.log('Database is connected') },
        err => { console.log('Can not connect to the database'+ err)}
        );
}


module.exports = connectDB