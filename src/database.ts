import mongoose from 'mongoose';

import { mongodb } from './keys';

mongoose.connect(mongodb.URI, {
  useNewUrlParser: true
}).then(db => console.log('Db is connected'))
  .catch(err => console.log(err));

//   const mongoose = require('mongoose');

// const { mongodb } = require('./keys');

// mongoose.connect(mongodb.URI, {
//     useNewUrlParser: true
// })
//     .then((db:any) => console.log('DB is connected'))
//     .catch((err: any) => console.error(err));