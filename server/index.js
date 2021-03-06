//require('dotenv').config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config()

//console.log(process.env)

import postRoutes from './routes/posts.js'
import userRoutes from './routes/user.js';
import userlistRoutes from './routes/userlistRoutes.js'
import profileRoutes from './routes/profile.js';

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);
app.use('/userlist', userlistRoutes);
app.use('/profile', profileRoutes);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server has been started on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);