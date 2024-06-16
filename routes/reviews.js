import express from 'express';


import {assignReview,submitReview,updateReview} from '../controllers/review_controller.js';
const reviewrouter = express.Router();
reviewrouter.post('/assign-review/:id', assignReview);
reviewrouter.post('/create/:id', submitReview);
reviewrouter.post('/update-review/:id', updateReview);

export default  reviewrouter;
