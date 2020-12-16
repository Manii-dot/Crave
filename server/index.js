import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//Connection to Cluster Atlas
const CONNECTION_URL = 'mongodb+srv://sybrigcool:sybrigcool123@cluster0.fkbvv.mongodb.net/<dbname>?retryWrites=true&w=majority';

