import express from 'express';
import userrouter from './users.js';
import reviewrouter from './reviews.js';
const indexrouter = express.Router();

console.log('router reloaded');

indexrouter.use('/', userrouter);
indexrouter.use('/review',reviewrouter);

export default indexrouter;
