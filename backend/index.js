import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import RestaurantController from './src/controllers/restaurant.js';
import http from 'http';

dotenv.config();

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

app.set('trust proxy', 3);

http.createServer(app).listen(port, () => console.log('Application Started at: ' + port));

const router = express.Router();

router.get('/restaurant', RestaurantController.index);
router.post('/restaurant/create', RestaurantController.validateParams, RestaurantController.addName);

app.use('/', router); //to use the routes

